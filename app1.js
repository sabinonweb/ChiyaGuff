// const express = require("express");
// const path = require("path");

// //express app
// const app = express();

// //register view engine for dynamic html data showing
// app.set("view engine", "ejs");
// app.set("views", "view"); //ejs looks for views, so specifying that in this case view = views

// //listening for events
// app.listen(3000);

// app.get("/", (request, response) => {
//   const blogs = [
//     {
//       name: "AI AI Captain",
//       snippet:
//         "lorem ijcnjesknv jfh vijsknvc ijknfijnvdfjvn dfvjkdfnvijdfnidfjkncedjkcndsjkcandsjcksa",
//     },
//     {
//       name: "1500 lines of code",
//       snippet:
//         "lorem ijcnjesknv jfh vijsknvc ijknfijnvdfjvn dfvjkdfnvijdfnidfjkncedjkcndsjkcandsjcksa",
//     },
//     {
//       name: "Where's the box?",
//       snippet:
//         "lorem ijcnjesknv jfh vijsknvc ijknfijnvdfjvn dfvjkdfnvijdfnidfjkncedjkcndsjkcandsjcksa",
//     },
//   ];
//   response.render("index", { title: "Home", blogs: blogs });
// });

// app.get("/about", (request, response) => {
//   response.render("about", { title: "About" });
// });

// app.get("/blog/create", (request, response) => {
//   response.render("create", { title: "Create" });
// });

// //redirect
// app.get("/about-us", (request, response) => {
//   response.render("about");
// });

// app.use((request, response) => {
//   response.status(404).render("404", { title: "404 Not Found" });
// });
