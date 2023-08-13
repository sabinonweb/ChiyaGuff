const posts = [
  { title: "Post 1", content: "Content of Post 1" },
  { title: "Post 2", content: "Content of Post 2" },
];

const getPosts = () => {
  let output = "";
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPosts = (post) => {
  return new Promise((resolve, reject, error) => {
    setTimeout(() => {
      posts.push(post);
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
};

createPosts({ title: "Post 3", content: "Content of Post 3" })
  .then(getPosts)
  .catch((error) => console.log(error));

promise1 = Promise.resolve("Lemme talk to y'all.");
promise2 = 10;
promise3 = new Promise((ressolve, reject) => {
  setTimeout(ressolve, 1000, "Goodbye");
});
promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
