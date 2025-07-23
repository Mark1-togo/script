/*unary operator +and converts the upper end (string with no) into a number  -and works the same as +and though negates the number in the string
They act on a single operand to perform tasks like type conversion, value manipulation, or condition checking.
*/
let string1 = "43";
let result = +string1;
console.log(result); //43
console.log(typeof result);

// logical not ! flips the value of the boolean .if true it turns to false also a unary operator

let isOnline = false;
console.log(!isOnline); //true

//Bitwise not operator ~ inverts the binary rep of a number
let num = 6; //0110
console.log(~num); // -6 - 1 = -7

// void() evaluate an expression and return undefined also used in links to prevent navigation
const test = void (9 + 1);
console.log(test); // undefined

//typeof operator
console.log(typeof isOnline); // boolean
