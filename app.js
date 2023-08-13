const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const dataBaseURI =
  "mongodb+srv://sabinonweb:yacht789@cluster0.ex4ipp8.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dataBaseURI)
  .then((result) => {
    app.listen("3000");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
// app.set('views', 'views') : specify where to look

app.use(express.static("public"));
app.use(morgan("tiny")); //middleware use

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
