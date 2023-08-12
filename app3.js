const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.set('views', 'views') : specify where to look

app.listen("3000");

app.use((req, res, next) => {
  console.log("Here we go.");
  console.log("Host: ", req.hostname);
  console.log("Path: ", req.path);
  console.log("Method: ", req.method);
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    { title: "AI AI Captain", snippet: "djsvnj jbdfnvsknk ijdnf ndlsfk" },
    { title: "jfdvdfvdf", snippet: "jnjvnfdjkvnfdklvnsdfvkfsvsfdvdf" },
    {
      title: "jndcjsdn",
      snippet:
        "qiuehfinksjcmadcdsjcndksmlcdjckdsk sddfdskfjsdidkf sdk k ksdmfk s",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/create/blog", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("about");
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Dumbo" });
});
