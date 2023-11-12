const request = require('request');
const userInput = process.argv.slice(2, 4);
const url = userInput[0];
const path = userInput[1];

if (!url.includes("http") || !url) {
  console.log(`${url} is not the correct format. Please provide a complete URL.`);
}

if (path.includes("http") || !path) {
  console.log(`${path} must be a local path.`);
}

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
