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
    document.body.innerHTML = output; //goto body of the html and put output in innerHTML
  }, 1000);
};

const createPosts = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPosts({ title: "Post 3", content: "Content of Post 3" }, getPosts);
//getPosts is a callback here as it runs immediately after post is pushed rather than waiting for 2000ms
