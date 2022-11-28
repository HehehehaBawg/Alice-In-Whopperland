const config = require("./config.json");

import("website-scraper").then(scrape => {
  scrape = scrape.default;
  const options = {
    urls: ['https://1v1.lol/'],
    directory: './games/1v1'
  };
  
  (async () => {
    // with async/await
    const result = await scrape(options);
  })();
});