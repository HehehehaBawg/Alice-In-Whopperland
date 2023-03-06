require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const axios = require("axios").default;
const proxy = require("http-proxy-middleware");

const app = express();

// HTTP -> HTTPS

if (env == "production") {
	const port = process.env.HTTPS_PORT || 443;

	const server = https.createServer(app).listen(port, "0.0.0.0", () => {
		console.log(`HTTPS on port ${port}`);
	});

	for (let i = 1; process.env[`DOMAIN${i}`] != undefined; i++) {
		const certificate = {
			key: fs.readFileSync(process.env[`DOMAIN${i}_KEY_PATH`]),
			cert: fs.readFileSync(process.env[`DOMAIN${i}_CERT_PATH`]),
		};

		server.addContext(process.env[`DOMAIN${i}`], certificate);
	}

	express().get("*", (req, res) => res.redirect(`https://${req.headers.host}${req.url}`)).listen(process.env.HTTP_PORT || 80, "0.0.0.0");

	/*const ssl_config = {
		key: fs.readFileSync(process.env.SSL_KEY_PATH),
		cert: fs.readFileSync(process.env.SSL_CERT_PATH),
	};*/
	
	app.get("/ads.txt", (req, res) => {
		res.redirect(301, "https://srv.adstxtmanager.com/43195/melvin4life.com");
	});
} else if (env == "development") {
	const port = process.env.HTTP_PORT || 8080;

	app.listen(port, "0.0.0.0", () => console.log(`(dev) HTTP on port ${port}`));
}

const config = require(path.join(__dirname, "config.json"));

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

app.get("/", (req, res) => {
	let file = fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8");
	file = file.replace("<head>", `<head>${generate_extra_head_html(true)}`);
	res.status(200).send(file);
});

app.get("/index.html", (req, res) => {
	let file = fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8");
	file = file.replace("<head>", `<head>${generate_extra_head_html(true)}`);
	res.status(200).send(file);
});

app.use(express.static("public"));

app.get("/config.json", (req, res) => {
	res.sendFile(path.join(__dirname, "config.json"));
});

app.get("/games", (req, res) => {
	res.status(301).redirect("/");
});

app.use(proxy('/snapchat', { target: 'http://web.snapchat.com' }));

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

const generate_extra_head_html = ads_enabled => {
	let string = ``;
	
	if (process.env.GOOGLE_GA4_ID) {
		string += `
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_GA4_ID}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){ dataLayer.push(arguments); }
			gtag('js', new Date());

			gtag('config', '${process.env.GOOGLE_GA4_ID}');
		</script>`;
	}
	if (process.env.GOOGLE_UA_ID) {
		string += `
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_UA_ID}"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', '${process.env.GOOGLE_UA_ID}');
		</script>`;
	}
	if (ads_enabled && process.env.GOOGLE_ADSENSE_ID) {
		string += `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.GOOGLE_ADSENSE_ID}" crossorigin="anonymous"></script>`;
	}
	return string;
};

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
			if (file_path.endsWith(".html") || (file_path.endsWith("/") && fs.existsSync(file_path + "index.html"))) {
				let file = fs.readFileSync(file_path + (file_path.endsWith("/") ? "index.html" : ""), "utf8");
				file = file.replace("<head>", `<head>${generate_extra_head_html(game.ads)}`);
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
		await game_request(req, res);
	}
});

app.get(`/${config.games_path.replace("/", "")}/:game/*`, game_request);
