const fs = require("fs");

fs.readFile("./docs/blog.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});

fs.writeFile("./docs/blog.txt", "Do it for the yacht titan.", () => {
  console.log("The file was written.");
});

fs.writeFile("./docs/blog1.txt", "Opinions are assholes.", () => {
  console.log("The blog was written.");
});

if (!fs.existsSync("./assets")) {
  fs.mkdir("assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("The assets folder was created.");
  });
} else {
  fs.rmdir("./assets", (error) => {
    console.log(error);
  });
}

fs.writeFile("./docs/deleteMe.txt", "Delete me daddy", () => {
  console.log("File deleted");
});

if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Deleted");
  });
}
