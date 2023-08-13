const test = new Promise((ressolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    ressolve("Success");
  } else {
    reject("Dumbo");
  }
});

test
  .then((message) => {
    console.log("This is in the then: ", message);
  })
  .catch((message) => {
    console.log("This is in the catch: ", message);
  });
