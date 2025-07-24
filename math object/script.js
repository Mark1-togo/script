//Math.random() generate any random floating-point between 0 (inclusive) and 1(exclusive)
console.log(Math.random()); //0.013680604808051888
//Math.min() Math.max()
const smallest = Math.min(1, 2, 3);
console.log(smallest); // 1
const largest = Math.max(1, 2, 3);
console.log(largest); // 3

//Rounding numbers Math.ceil Math.floor Math.round
console.log(Math.ceil(5.2)); // 6 rounding up
console.log(Math.floor(5.7)); // 5 rounding down
console.log(Math.round(7.4)); // 7 round to the nearest full integer
console.log(Math.round(7.7)); // 8

//Generating random number between 20 and 1
const randomNumberBtw1and20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumberBtw1and20);

//Math.trunc remove the decimal part of a number and returns only the integer
console.log(Math.trunc(8.6)); // 8

//square root or cube root
console.log(Math.sqrt(64)); // 8
console.log(Math.cbrt(27)); // 3

//Math.abs() To get absolute value of a number
console.log(Math.abs(-6)); // 6
console.log(Math.abs(7)); // 7

//Math.pow(4, 2); 2 raised to 4
console.log(Math.pow(4, 2)); // 16

let randomNumber = Math.floor(Math.random() * 5 + 1);

let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "Your cat will look very cuddly today.";
let fortune3 = "It would be wise to avoid the color red today.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let selectedFortune = randomNumber;
console.log(selectedFortune);
if (selectedFortune === 1) {
  console.log(fortune1);
} else if (selectedFortune === 2) {
  console.log(fortune2);
} else if (selectedFortune === 3) {
  console.log(fortune3);
} else if (selectedFortune === 4) {
  console.log(fortune4);
} else if (selectedFortune === 5) {
  console.log(fortune5);
}
/*
NaN represents undefined numerical result. also considered a type of number
isNaN() a function used to determine whether a value is NaN or not.
Number.isNaN() provides a more reliable way to check for NaN values, especially in cases where type coercion might lead to unexpected results with the global isNaN() function. In practice, when dealing with numerical operations or user inputs that should be numbers, it's often necessary to check for NaN to handle errors or unexpected inputs gracefully
Number.isNaN(value) checks if a value is exactly NaN
*/

console.log(isNaN("37")); // false
console.log(isNaN(true)); //false
console.log(isNaN("")); // false empty string converted to 0
console.log(isNaN(NaN)); // true
console.log(isNaN("45.3")); // false "45.3" is converted to a number
function division(a, b) {
  let result = a / b;
  if (Number.isNaN(result)) {
    return `Error: Addison resulted in NaN`;
  }
  return result;
}
console.log(division(2, 2)); // 1
console.log(division(10, 0)); // infinity
console.log(division(0, 0)); // Error: Addison resulted in NaN

//In JavaScript, NaN === NaN is false because NaN (Not-a-Number) is defined as a value that is not equal to anything, even itself.
//parseFloat() returns floating point number from a string  If it can't find a valid number at the start of the string, it returns NaN (Not a Number).
console.log(parseInt("42")); // 42
console.log(parseFloat("3.14.5")); // Output: 3.14
console.log(parseFloat("3.14 abc")); // Output: 3.14
//parseInt() returns a string to an integer

console.log(parseInt("42px")); // Output: 42
console.log(parseInt("3.14")); // Output: 3
console.log(parseInt("-42")); // Output: -42
console.log(parseInt("abc123")); // Output: NaN
console.log(parseInt("10.99")); // 10

/* 
.toFixed()
method is a built-in JavaScript function that formats a number using fixed-point notation. 
It's particularly useful when you need to control the number of decimal places in a number, especially for displaying currency values or when working with precise measurements.
*/
console.log((3.142).toFixed(2)); // 3.14
let num = 5.678;
console.log(num.toFixed(1));
console.log(1 / 0);
