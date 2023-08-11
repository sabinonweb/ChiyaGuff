const express = express.require;
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
