// === Week 5: Modern JavaScript ===

// let, const, template literals
let name = "Shiv";
const age = 22;
console.log(`Hello ${name}, you are ${age} years old.`);

// Default parameters + arrow function
const greet = (user = "Bro") => `Welcome ${user}!`;
console.log(greet(name));

// Destructuring
const person = { first: "John", last: "Doe", city: "Pune" };
const { first, city } = person;
console.log(`Destructured: ${first} from ${city}`);

// Spread & rest operators
const nums = [10, 20, 30];
const moreNums = [...nums, 40, 50];
console.log("Spread:", moreNums);

const sum = (...args) => args.reduce((a, b) => a + b);
console.log("Sum:", sum(1, 2, 3, 4));

// Higher order functions
const marks = [80, 90, 70];
const avg = marks.reduce((a, b) => a + b) / marks.length;
console.log("Average Marks:", avg);

// === Week 6: Async JS ===

console.log("1: Start");

setTimeout(() => console.log("2: Async task done"), 1000);

console.log("3: End");

const fetchData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/octocat");
    const data = await res.json();
    console.log("GitHub User:", data.login);
  } catch (err) {
    console.log("Error fetching:", err);
  }
};
fetchData();

// === Week 7: DOM + APIs ===
document.body.style.backgroundColor = "#f9f9f9";
document.body.style.textAlign = "center";

const title = document.querySelector("h1");
title.style.color = "#333";
