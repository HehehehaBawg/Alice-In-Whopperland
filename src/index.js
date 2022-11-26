const express = require("express");
const path = require("path");
const app = express();

const port = 80 || process.env.PORT;

app.listen(port, () => {
	console.log(`Listening to *:${port}`);
});

app.use(express.static("public"));