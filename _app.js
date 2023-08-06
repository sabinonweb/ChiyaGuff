const express = require("express");
const path = require("path");

//express app
const app = express();

//register view engine for dynamic html data showing
app.set("view engine", "ejs");
app.set("views", "view"); //ejs looks for views, so specifying that in this case view = views

//listening for events
app.listen(3000);

app.get("/", (request, response) => {
  response.sendFile("/index.html", {
    root: path.join(__dirname, "view"),
  });
});

app.get("/about", (request, response) => {
  response.sendFile("/about.html", { root: path.join(__dirname, "view") });
  console.log(__dirname);
});

//redirect
app.get("/about-us", (request, response) => {
  response.redirect("/about.html", { root: path.join(__dirname, "view") });
  console.log(__dirname);
});

app.use((request, response) => {
  response.sendFile("./view/404.html", { root: __dirname });
});
