// Document Object Model (DOM) DOM manipulation

//single element selectors
// const form = document.getElementById("my-form");
// const form2 = document.querySelector("my-form"); //single query selector

//multiple element selectors
// console.log(document.getElementsByClassName("item"));

//console.log(document.querySelectorAll(".item")); //better choice

// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");

// //ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Bye";
// ul.lastElementChild.innerHTML = "<h1>Hello again</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "green";

// const btn = document.querySelector(".btn");

// // https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions
// //https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
// // e is short for event
// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1 class='bg-dark'>hello</h1>";
// });

const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //Clear the fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
