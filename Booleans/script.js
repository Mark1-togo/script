let difference = 4 - 2;
console.log(difference); //2

difference = 9 % 3; //gives a reminder when 9 is divided by 3. in this case 0
console.log(difference);
//strings with numbers  Type coercion
let result = 3 + "23";
console.log(result); //323
result = "6" - 2; //4
console.log(result);

//booleans and numbers true = 1 false = 0
let result1 = true + 3; //4
let result2 = false + 3; //3
console.log(result1);
console.log(result2);

//js uses Precedence rules , anything inside a parenthesis is evaluated first
const result3 = 20 - 4 * 3;
console.log(result3); //8
//Division and * will take place before + -
//JS uses sociotivity when operators are similar
const result4 = 10 - 2 + 3; //left to right,
console.log(result4); // 4

//operators like assignment are right to left, right side of expression is evaluated first
let a, b;
a = b = 5;
console.log(a); //5
console.log(b); //5
console.log(a + b); //10

//exponent operator is also right to left
const result5 = 2 ** (3 ** 2);
console.log(result5); //512  starts with 3 raised to 2 first and then 2 raised to 9

//increment and decrement
let y = 5;
console.log(y++); //5 postfix
console.log(y); //6

let x = 5;
console.log(--x); // 4 prefix
console.log(x); //4

//compound assignment operators. Allows you to perform math and return on online of code
let num = 4;
num += 2; //addition assignment  works the same on subtraction
console.log(num); //6
let c = 100;
c /= 5;
console.log(c); // 20
// &= bitwise assignment operator bitwise and operation with a specified number and operation and re assign the answer to the variable
let u = 6;
let v = 3;
u &= v; //same as u = u & v
console.log(u);

// |= bitwise or operator

let m = 8;
let n = 2;
m |= n;
console.log(m); // 7
