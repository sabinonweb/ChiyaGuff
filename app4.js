const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog.js");

const dataBaseURI =
  "mongodb+srv://sabinonweb:mongodb@cluster0.ex4ipp8.mongodb.net/WebBlogs?retryWrites=true&w=majority";

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

app.get("/new-blog", (req, res) => {
  const blog = new Blog({
    title: "AI AI Captain2",
    snippet: "djsvnj jbdfnvsknk ijdnf ndlsfk",
    body: "You want some, come get some. paparapa",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/create/blog", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("64d8506f1df9f54cdb2533ae").then((result) => {
    res.send(result).catch((err) => console.log(err));
  });
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
