//functions Functions are reusable pieces of code that perform a specific task or calculate a value.
function greet() {
  console.log("Hello, Jessica!");
}
greet(); // "Hello, Jessica!"

// parameters acts as a placeholder for the values
// Arguments The actual value thats passed when its called

function calling(name) {
  console.log("Hello, " + name + "!");
}
calling("Tony");
calling("Alice"); // name serves as the parameter while "Tony" "Alice" stands for arguments

function doSomething() {
  console.log("Trying functions");
}
let result = doSomething();
console.log(result); // will return undefined

//If you need your function to return a specific value, then you will need to use the return statement. Here is an example of using a return statement to return the sum of two values:
function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(4, 5));

// anonymous function
const sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(2, 4)); // 6

/*
Functions support default parameters, allowing you to set default values for parameters. These default values are used if the function is called without an argument for that parameter. 
Here's an example:
*/
function greetings(name = "John") {
  console.log(`How are you ${name}`);
}
greetings("Wallace"); // How are you Wallace

function testing(num1, num2) {
  return num1 + num2;
}
console.log(testing(2, 2));

function mystery(a, b = 4) {
  return a * b;
}
console.log(mystery(4));

// ()=>{}   Arrow functions
const arrowFunction = (name) => {
  console.log(`${name} is trying arrow functions`);
};
arrowFunction("Tony");
//if parameter list only has one parameter you can remove ()
const greetings3 = (names) => {
  console.log("Hello, " + names + "!");
};
greetings3("Tony"); // Hello, Tony!

//if your arrow function has no parameter then you can use
const greetings4 = (name) => console.log(`${name} is mr last name`);
greetings4("Oduor");

// return
function calculate(pie, radius) {
  const circumference = Math.floor(2 * pie * radius);
  return circumference;
}
console.log(calculate(3.142, 10));
//global var declared outside a function and local scope are declared in a scope
let message = "I love pineapples";
function callMessage() {
  console.log(message);
}
callMessage();
/*
Global variables should be used sparingly, as they can lead to naming conflicts and make your code harder to maintain. Local variables help to keep different parts of your code isolated, which is especially useful in larger programs. 
Block scoping with let and const provides even finer control over variable accessibility, helping to prevent errors and make your code more predictable. Mastering these basic concepts of global, local, and block scope will provide a solid foundation for understanding more advanced topics.
Block scope is a concept introduced with the let and const keywords in ES6. A block is any code section within curly braces, {},
 such as in if statements, for loops, or while loops. 
*/

function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  } else {
    return num1 / num2;
  }
}

console.log(Math.pow(5, 2));
