const location = (response) => {
  return new Promise((resolve, reject) => {
    console.log("Lemme talk to y'all.");
    if (response === "Google") {
      resolve("Google finds your location.");
    } else {
      reject("Google is my only best friend.");
    }
  });
};

const next = (response) => {
  return new Promise((resolve, reject) => {
    console.log("In the next.");
    resolve(response + " " + "Say hi");
  });
};

// location("Google")
//   .then((response) => {
//     console.log(response);
//     return next(response);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function Real() {
  try {
    const response = await location("Facebook");
    console.log(response);
    const result = await next(response);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

Real();
