const request = require('request');
const userInput = process.argv.slice(2, 4);
const url = userInput[0];
const path = userInput[1];

if (!url.includes("http")) {
  console.log(`${url} is not the correct format. Please provide a complete URL.`);
}

if (path.includes("http")) {
  console.log(`${path} must be a local path.`);
}


