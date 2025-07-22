let age = 17;
if (age >= 18) {
  console.log("Old enough to drive");
} else {
  console.log("Still young to drive");
}

// Where you'd use comparison loops, if statements and other decision based on conditions
console.log(5 == "5"); //true
console.log(7 != "7"); // false
console.log(5 !== "5"); // true
console.log(5 === "5"); // false it avoids type coercion
console.log(7 > 4); // true
console.log(7 >= 6); //true

// Unary operators
const str = "10";
const strToNum = +str;
console.log(strToNum); //10
