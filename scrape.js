const config = require("./config.json");

const scrape = require("website-scraper"); // only as ESM, no CommonJS
const options = {
  urls: ['http://nodejs.org/'],
  directory: '/path/to/save/'
};

// with async/await
const result = await scrape(options);

// with promise
scrape(options).then((result) => {});