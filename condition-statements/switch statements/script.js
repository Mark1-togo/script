/*
A switch statement evaluates an expression and matches its value against a series of case clauses. 
When a match is found, the code block associated with that case is executed. Here's a basic structure of a switch statement:
switch statements are typically used when you're comparing a single variable against multiple possible values. They're especially useful when you have many potential conditions to check against a single variable. Here is an example using a switch statement for the days of the week:
*/
//structure of switch statements
/*
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break; // The break statement at the end of each case is crucial. It tells the program to exit the switch block once a matching case has been executed.
  case value2:
    // code to be executed if expression === value2
    break;
  default:
  // code to be executed if expression doesn't match any case
}
*/
let dayOfWeek = 6;

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week");
    break;
  case 2:
    console.log("It's Tuesday! Tirry Tuesday");
    break;
  case 3:
    console.log("Wednesday! We are half the week");
    break;
  case 4:
    console.log("It's Thursday! Almost ending the week, keep pushing");
    break;
  case 5:
    console.log("Friday it is, end the week with energy");
    break;
  case 6:
    console.log("It's Saturday! Get out there, link with day ones");
    break;
  case 7:
    console.log("It's Sunday! Read some bible verse");
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}

// Where if/else if statements are more flexible

let creditScore = 670;
let annualIncome = 60000;
let loanAmount = 200000;

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
  eligibilityStatus = "Eligible for premium loan";
} else if (creditScore >= 700 && annualIncome >= 50000) {
  eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
  eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
  eligibilityStatus = "Not eligible due to low credit score.";
} else {
  eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);

if (1) {
  console.log("True!");
}

const a = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
console.log(b);
