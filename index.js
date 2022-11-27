const express = require("express");
const path = require("path");
const app = express();

const config = require(path.join(__dirname, "config.json"));

const port = 80 || process.env.PORT;

app.listen(port, () => {
	console.log(`Listening to *:${port}`);
});

app.use(express.static("public"));

app.get("/config.json", (req, res) => {
	res.sendFile(path.join(__dirname, "config.json"));
});

app.get(`/${config.games_path.replace("/", "")}/:game/*`, (req, res) => {
	const game = config.games.find(g => g.path == req.params.game);

	if (game == undefined) {
		res.status(404);
		res.send("Error 404 - Game not found");
	} else {
		res.status(200);
		res.sendFile(path.join(__dirname, req.path.replace(req.params.game, game.path)));
	}
});