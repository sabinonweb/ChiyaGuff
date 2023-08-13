const food = new Promise((resolve, reject) => {
  const f = "Nah";

  if (f == "Momo") {
    resolve("Momo!");
  } else {
    reject("dumbo");
  }
});

food.then(
  (food) => {
    console.log("Aha this is ", food);
  },
  (message) => {
    console.log("You are a ", message);
  }
);
// .then((food) => {
//   console.log("This is ", food);
// })
// .catch((message) => {
//   console.log("You are a ", message);
// });
