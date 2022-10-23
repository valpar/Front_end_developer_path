// let and const

//const cant be changed, its constant
// when use let when use const
//always use const when you know that you dont need to reassign it, less error prone

// let age = 30;
// age = 31;

// console.log(age); //works, with const it doesnt.

//data types String, numbers, boolean, null, undefined, symbols?

// const name = "Valmar";
// const age = 26;
// const rating = 4.5; //no float or decimal in js
// const isNewbie = true;
// const x = null;
// const y = undefined;
// //or
// let z; //also undefined

// console.log(typeof x);

// const name = "m";
// const age = 30;

// //concatenation
// console.log("my name is " + name + "and i am " + age + " years old");
// //template string
// const test = console.log(`My name is ${name} and im ${age} years old.`);

// console.log(test);

// const s = `Hello world`;

// console.log(s.length);
// console.log(s.toUpperCase()); //method is basically a function that is associated with an object. Method needs parentheses.
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase()); // takes in 2 indexes, where you want to start and end.
// console.log(s.split(` `));

//Arrays - variables that hold multiple values

//const numbers = new Array(1, 2, 3, 4, 5); // new keyword, is a constructor

// const fruits = [`apples`, `oranges`, `pears`]; //arrays are zero based

// //bad example of adding variables into arrays
// fruits[3] = `grapes`;

// //good way

// fruits.push(`mangos`); //adds to the end

// fruits.unshift(`strawberries`); //adds to the beginning and returns the new length

// fruits.pop(); // takes the last variable away

// console.log(Array.isArray(`apples`));

// console.log(fruits.indexOf(`oranges`));

// console.log(fruits);

//objects

// const person = {
//   firstName: "John",
//   lastName: "Parts",
//   age: 16,
//   hobbies: ["jogging", "swimming", "reading"],
//   address: {
//     street: "sinilille",
//     city: "tallinn",
//     state: "harjumaa",
//   },
// };

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);

// //JavaScript Object Destructuring

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(city);

// person.email = "valmar@gmail.com";

// console.log(person);

// const todos = [
//   {
//     id: 1,
//     text: "go grocery shopping",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "read a book",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "walk the dog",
//     isCompleted: true,
//   },
// ];

// const todoJSON = JSON.stringify(todos);

// console.log(todos[1].text);
// console.log(todoJSON);

//LOOOPS

// for loops
// const todos = [
//   {
//     id: 1,
//     text: "go grocery shopping",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "read a book",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "walk the dog",
//     isCompleted: true,
//   },
// ];

//better practice
// for (let todo of todos) {
//   console.log(todo.text);
// }

//bad practice
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`For loop number: ${i}`);
// }

// //while loop
// let i = 0;
// while (i < 10) {
//   console.log(`For loop number: ${i}`);
//   i++;
// }

// const todos = [
//   {
//     id: 1,
//     text: "go grocery shopping",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "read a book",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "walk the dog",
//     isCompleted: true,
//   },
// ];
// //foreach, map, filter
// //array.forEach - loop, high order array method, they take in paramter as a function
// /** Higher order functions are functions that operate on other functions,
//  * either by receiving them as arguments or by returning them.
//  * It is a function that accepts a function as a parameter or returns a function as the output.
//  * callback function can have one or multiple parameters, first is the variable that you want to use for the each item*/
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// //.map return an array, in this case the value of text
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// /** The filter() method creates a shallow copy of a portion of a given array,
//  *  filtered down to just the elements from the given array
//  *  that pass the test implemented by the provided function. */

// const todoCompletedFilter = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// });

// //this function only returns the text of the objects which isCompleted value is true
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

//conditionals

const x = 3;
const y = 3;

// === checks the data type - this is less error prone
if (x === 10) {
  console.log(`x is 10`);
} else if (x > 10) {
  console.log(`x is greater than 10`);
} else {
  console.log(`x is less than 10`);
}

// or statement checks if only one of the statements is true
if (x > 5 || y > 10) {
  console.log(`x is more than 5 or y is more than 10`);
}

// == doesnt check the data type, so this statement is true
// if (x == 10) {
//   console.log(`x is 10`);
// }
