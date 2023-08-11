const http = require("http");
const fs = require("fs");

//server
const _server = http.createServer((req, res) => {
  let path = "../file";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.setHeader("Location", "about.html");
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
  }

  //reading the files
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

_server.listen("3002", "localhost", () => {
  console.log("Listening to objects at port 3002");
});
