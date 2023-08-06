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
  response.render("index");
});

app.get("/about", (request, response) => {
  response.render("about");
  console.log(__dirname);
});

//redirect
app.get("/about-us", (request, response) => {
  response.render("about");
  console.log(__dirname);
});

app.use((request, response) => {
  response.status(404).render("404");
});
