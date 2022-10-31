const posts = [
  { title: "Post one", body: "This a post one" },
  { title: "Post two", body: "This a post two" },
  { title: "Post three", body: "This a post three" },
  { title: "Post four", body: "This a post four" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post five", body: "this is post five" }, getPosts);
