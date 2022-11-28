const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const axios = require("axios").default;

const app = express();

// HTTP -> HTTPS
express().get("*", (req, res) => res.redirect(`https://${req.headers.host}${req.url}`)).listen(80);

const ssl_config = {
	key: fs.readFileSync("/etc/letsencrypt/live/melvin4life.com/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/melvin4life.com/cert.pem"),
};

const port = 443;

https.createServer(ssl_config, app).listen(port, () => {
	console.log(`HTTPS on port ${port}`);
});

const config = require(path.join(__dirname, "config.json"));

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
		const file_path = path.join(__dirname, req.path.replace(req.params.game, game.path));
		if (fs.existsSync(file_path)) {
			res.status(200).sendFile(file_path);
		} else if (game.proxy_url) {
			const remote_url = game.proxy_url + req.path.replace(path.join("/", config.games_path, game.path), "");
			try {
				const file = await axios.get(remote_url);
				console.log(file.status);
				res.status(file.status).send(file.data);
			} catch (e) {
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