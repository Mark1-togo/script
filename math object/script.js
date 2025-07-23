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
