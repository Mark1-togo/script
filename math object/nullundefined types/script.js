/*
A variable is undefined when it has been declared but hasn't been assigned a value. 
It's the default value of uninitialized variables and function parameters that weren't provided an argument.

The null type, on the other hand, is an assignment value that represents a deliberate non-value. 
It's often used to indicate that a variable intentionally has no value.
*/
console.log(null === undefined); //false

/*
This difference is important to keep in mind when writing conditional statements or performing equality checks in your code. When comparing null or undefined with other values using the equality operator (==), the behavior can be unexpected. For example:

*/
console.log(null == 0); // false
console.log(null == ""); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false

let testing;
console.log(testing); // returns undefined testing variable is not defined

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
