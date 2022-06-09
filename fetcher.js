const request = require('request');
const fs = require('fs');

const myArgs = process.argv.slice(2);

request(myArgs[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(myArgs[1], body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    fs.stat(myArgs[1], (err, stats) => {
      if (err) {
        console.log(`File doesnt exit`);
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${myArgs[1]}`);
      }
    })
  });
});

