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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post five", body: "this is post five" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async / await - more elegant way to handle promises

// async function init() {
//   await createPost({ title: "Post five", body: "this is post five" }); //waiting this to be done before

//   getPosts();
// }

// init();

//async await with fetch

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users?page=2");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

//promise.all

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

// const promise4 = fetch("https://reqres.in/api/users").then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
