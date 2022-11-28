const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const axios = require("axios").default;

const app = express();

const ssl_config = {
	key: fs.readFileSync("/etc/letsencrypt/live/melvin4life.com/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/melvin4life.com/cert.pem"),
};

const port = 443 || process.env.PORT;

https.createServer(ssl_config, app).listen(port, () => {
	console.log(`Listening to *:${port}`);
});

const config = require(path.join(__dirname, "config.json"));

app.use(express.static("public"));

app.get("/config.json", (req, res) => {
	res.sendFile(path.join(__dirname, "config.json"));
});

app.get("/games", (req, res) => {
	res.status(301).redirect("/");
});

const game_request = async (req, res) => {
	const game = config.games.find(g => g.path == req.params.game);

	if (game == undefined) {
		res.status(404).send("Error 404 - Game not found");
	} else {
		const file_path = path.join(__dirname, req.path.replace(req.params.game, game.path));
		if (fs.existsSync(file_path)) {
			res.status(200).sendFile(file_path);
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