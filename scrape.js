const config = require("./config.json");

import("website-scraper").then(scrape => {
  scrape = scrape.default;
  const options = {
    urls: ['https://discord.com/app'],
    directory: './games/discord'
  };
  
  (async () => {
    // with async/await
    const result = await scrape(options);
  
    // with promise
    scrape(options).then((result) => {});
  })();
});