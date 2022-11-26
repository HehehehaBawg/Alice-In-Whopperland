import { Game } from "./game.js";
import { ImageLoader } from "./image_loader.js";

window.onload = () => {
	window.game = new Game(document.getElementById("canvas").getContext("2d")); // Providing a context is optional. If not provided, a canvas will be created and its context will be used
	game.start();

	document.addEventListener("input", () => {
		game.config.speed_multiplier = parseFloat(document.getElementById("speed").value).toFixed(2);
		console.log(game.config.speed_multiplier);
		document.getElementById("speed-label").innerText = `${game.config.speed_multiplier}x Speed`;
	});
	document.getElementById("debug-mode").onclick = () => {
		game.config.debug_mode = document.getElementById("debug-mode").checked;
	};
};