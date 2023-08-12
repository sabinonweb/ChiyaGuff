const express = require("express");
const app = express();
const path = require("path");

app.listen("3003", () => {
  console.log("Listening to port 3003");
});

app.get("/", (req, res) => {
  //   res.send("Hello, World");
  const filePath = path.join(__dirname, "file", "index.html");
  res.sendFile(filePath);
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "file", "about.html");
  res.sendFile(filePath);
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  const filePath = path.join(__dirname, "file", "404.html");
  res.sendFile(filePath);
});
