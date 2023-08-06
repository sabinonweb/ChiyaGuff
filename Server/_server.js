const http = require("http");
const fs = require("fs");
const lo = require("lodash");

const _server = http.createServer((request, response) => {
  const number = lo.random(0, 20);
  console.log(number);

  const greet = lo.once(() => {
    console.log("Good Morning");
  });

  greet();

  let path = "../view/";

  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      break;
    case "/about-me":
      response.statusCode = 301;
      response.setHeader("Location", "/about");
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      break;
  }

  response.setHeader("Content-type", "text/html");

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      response.end();
    } else {
      response.end(data);
    }
  });
});
_server.listen("3000", "localhost", () => {
  console.log("Listening to events at port 3000");
});
