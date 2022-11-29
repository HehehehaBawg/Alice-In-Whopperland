const config = require("./config.json");

const args = process.argv.slice(2);

import("website-scraper").then(scrape => {
	scrape = scrape.default;
	const options = {
		urls: [args[0]],
		directory: args[1],
	};

	(async () => {
		// with async/await
		const result = await scrape(options);
	})();
});