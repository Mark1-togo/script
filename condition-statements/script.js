//if  statements. Contain truthy and falsy values. Works with booleans
/*
truthy values :any values resulting to true
    non-empty strings, any number other than 0 and -0, arrays, objects, boolean true
falsy values: boolean false, empty string, null, undefined, NaN(Not a Number)
*/
const age = 22;
if (age >= 18) {
  console.log("You are allowed to vote");
} else {
  console.log("You are not allowed to vote");
}

//If you want to check multiple condition use else if
const score = 78;
if (score >= 80) {
  console.log("You scored A");
} else if (score >= 70) {
  console.log("You scored B");
}

//Ternary operators  condition ? expressionIfTrue : expressionIfFalse .Use for simple conditions
const temperature = 14;
const weather = temperature > 25 ? "sunny" : "cool";
console.log(`Today's a ${weather} day`);

//Binary logical operators. Help value two expression and returns value based on the truthiness && || nullish
//&&
let result = true && "hello";
console.log(result); // hello
//falsy returns the first falsy value if there is
result = 0 && 3;
console.log(result); // 0

if (2 < 3 && 4 < 3) {
  console.log("The if block runs");
} else {
  console.log("The else block runs");
}
// || OR operator Checks if one of the operands is truthy
let a = "This is truthy" || false;
console.log(a); //This is truthy
let userInput;
if (userInput || "") {
  console.log("A user is present");
} else {
  console.log("No user"); //No user"
}

/* Nullish Coalescing operator ??
Helpful when you want to return a value only if the first one is null or undefined  
It returns the second value only if the first is null or undefined.                                                                                            
*/
userInput = null ?? "default";
console.log(userInput); //when you want to identify if the value is null or undefined
const userSettings = {
  theme: null,
  volume: 0,
  notification: false,
};
let theme = userSettings.theme ?? "light";
console.log(theme); // light
