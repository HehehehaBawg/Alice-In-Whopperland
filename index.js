require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const axios = require("axios").default;

// Analytics
const { Analytics } = require("analytics");
const googleAnalytics = require("@analytics/google-analytics").default;
const googleTagManager = require("@analytics/google-tag-manager");
const ua = require("universal-analytics");
//const { Visitor } = require("universal-analytics");
const geoip = require("geoip-lite");

const ga4_id = process.env.GA4;

/*const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Client = sequalize.define("Client", {
	uuid: {
		type: DataTypes.UUID,
		allowNull: false,
	},
	ip: {
		type: Sequelize.DataTypes.STRING,
	}
});
Client.sync();*/

//const analytics = ua(process.env.GOOGLE_ANALYTICS_ID);

const app = express();

// HTTP -> HTTPS

if (env == "production") {
	express().get("*", (req, res) => res.redirect(`https://${req.headers.host}${req.url}`)).listen(process.env.HTTP_PORT || 80, "0.0.0.0");

	const ssl_config = {
		key: fs.readFileSync(process.env.SSL_KEY_PATH),
		cert: fs.readFileSync(process.env.SSL_CERT_PATH),
	};
	
	const port = process.env.HTTPS_PORT || 443;
	
	https.createServer(ssl_config, app).listen(port, "0.0.0.0", () => {
		console.log(`HTTPS on port ${port}`);
	});
} else if (env == "development") {
	const port = process.env.HTTP_PORT || 8080;

	app.listen(port, "0.0.0.0", () => console.log(`(dev) HTTP on port ${port}`));
}

const config = require(path.join(__dirname, "config.json"));

const send_analytics = async req => {
	if (env == "development") return;
	const a = ua(process.env.GOOGLE_ANALYTICS_ID, req.ip, { strictCidFormat: false })
	//a.set("uip", req.ip);
	try {
		const geo = geoip.lookup(req.ip);
		a.set("geoip", geo.country);
	} catch (_) {}

	a.pageview(req.path).send();
};

app.use((req, res, next) => {
	if (req.path == "/") send_analytics(req);
	next();
});

// crossy road stuff
app.use((req, res, next) => {
	if (req.path.startsWith("/static/") && req.headers.referer && req.headers.referer.includes(path.join("/", config.games_path, "crossy-road"))) {
		const replaced = req.path.replace("/static", path.join("/", config.games_path, "crossy-road", "static"));
		req.path = replaced;
		req.url = replaced;
	}
	next();
});

app.use((req, res, next) => {
	if ((new RegExp(`^${path.join("/", config.games_path, "vex")}\/vex[0-9]+$`)).test(req.path)) {
		res.redirect(req.url + "/");
	}
	next();
});

app.get("/")

app.use(express.static("public"));

app.get("/config.json", (req, res) => {
	res.sendFile(path.join(__dirname, "config.json"));
});

app.get("/games", (req, res) => {
	res.status(301).redirect("/");
});

// discord stuff
app.get("/assets/*", async (req, res) => {
	if (req.headers.referer && req.headers.referer.includes(path.join("/", config.games_path, "discord"))) {
		const file = await axios.get(`https://discord.com/${req.url}`, {
			headers: {
				"Accept-Encoding": "gzip, deflate, br",
				"Content-Type": "application/javascript",
				"Connection": "keep-alive",
				"User-Agent": "Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30",
			},
		});
		//res.send(JSON.stringify(file.request._header));
		if (req.url.includes("acf190053b6374fa4d30.js")) console.log(file.headers.getContentEncoding, file.headers.getContentType());
		console.log(file.status);
		/*Object.keys(file.headers).forEach(key => {
			res.setHeader(key, file.headers[key]);
		});
		if (file.headers.has("transfer-encoding")) {
			res.removeHeader("Content-Length");
			console.log("removed");
		}
		console.log(res.getHeaderNames())*/
		res.status(file.status).send(file.data);
	}
});

const game_request = async (req, res) => {
	const game = config.games.find(g => g.path == req.params.game);

	if (game == undefined) {
		res.status(404).send("Error 404 - Game not found");
	} else {
		let file_path = path.join(__dirname, req.path.replace(req.params.game, game.path));

		if (game.path == "gba-emulator" && req.path.endsWith("player")) { // weird GBA stuff
			file_path += ".html";
		}

		if (fs.existsSync(file_path)) {
			if (ga4_id && (file_path.endsWith(".html") || (file_path.endsWith("/") && fs.existsSync(file_path + "index.html")))) {
				let file = fs.readFileSync(file_path + (file_path.endsWith("/") ? "index.html" : ""), "utf8");
				file = file.replace("<head>", `<head>
					<!-- Google tag (gtag.js) -->
					<script async src="https://www.googletagmanager.com/gtag/js?id=${ga4_id}"></script>
					<script>
						window.dataLayer = window.dataLayer || [];
						function gtag(){ dataLayer.push(arguments); }
						gtag('js', new Date());

						gtag('config', '${ga4_id}');
					</script>
				`);
				res.status(200).send(file);
			} else {
				res.status(200).sendFile(file_path);
			}
		} else if (game.proxy_url) {
			const remote_url = game.proxy_url + req.path.replace(path.join("/", config.games_path, game.path), "");

			const query_string = req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : "";

			try {
				console.log(remote_url + query_string);
				const file = await axios.get(remote_url + query_string);
				//const file_output = typeof file.data == "object" ? JSON.stringify(file.data) : file.data; // weird json stuff
				//if (file.status == 200) fs.writeFile("." + req.path, file_output, error => error ? console.error(error) : "");
				res.status(file.status).send(file.data);
			} catch (e) {
				//console.error(e);
				console.log("coulding find " + remote_url);
			}
		} else {
			res.status(404).send("Error 404 - Resource not found");
		}
	}
};

app.get(`/${config.games_path.replace("/", "")}/:game`, async (req, res) => {
	if (!req.url.endsWith("/")) {
		res.status(301).redirect(req.url + "/");
	} else {
		send_analytics(req);
		await game_request(req, res);
	}
});

app.get(`/${config.games_path.replace("/", "")}/:game/*`, game_request);
