const http = require("http"); //http
const fs = require("fs"); //file system
const lo = require("lodash"); //lodash

const server = http.createServer((request, response) => {
  // console.log(request.url, request.method);

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
      response.statusCode = 301; //redirect
      response.setHeader("Location", "/about");
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      break;
  }

  response.setHeader("Content-type", "text/html"); //specification of the text that is to be displayed
  //   response.write("<h1>Gear up fellas!<h1>");
  //   response.write("<h3>Fuck you, Haha<h3>");
  //   response.end();
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      response.end();
    } else {
      response.end(data); //   response.write(data); response.end()
    }
  });
});

server.listen("3000", "localhost", () => {
  console.log("Listening to events at port 3000");
});
