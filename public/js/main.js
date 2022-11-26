const key_audio = ["key1.wav", "key2.wav", "key3.wav"];
const games = [
	{
		name: "slope",
		title: "Slope",
	},
	{
		name: "eaglercraft",
		title: "Eaglercraft",
	},
	{
		name: "mario",
		title: "Mario"
	},
	{
		name: "flappy_bird",
		title: "Flappy Bird",
	}
];
const games_path = "games";

const game_list = document.getElementById("game-list");

games.forEach(game => {
	game_list.innerHTML += `<li class="game"><a class="game-link" href="${games_path}/${game.name}/">${game.title}</a></li>`;
});

document.addEventListener("keydown", () => {
	new Audio(`css/${key_audio[Math.floor(Math.random() * key_audio.length)]}`).play();
});