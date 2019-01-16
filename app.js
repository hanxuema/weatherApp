const request = require("request");
const fs = require("fs");


request(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=brisbane&key=AIzaSyBRdeGz4SkiQDIK4zjZ2at9kQ0ppubaqvM",
    json: true
  },
  (err, response, body) => {
    fs.writeFile("address.txt", body.results[0].formatted_address, () => {
      console.log(JSON.stringify(body, undefined, 2));
    });
  }
);
