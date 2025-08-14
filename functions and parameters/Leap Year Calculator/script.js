// User Story 1: Define a function called isLeapYear that takes a number as an argument
function isLeapYear(year) {
  // User Story 3 & 4: Use if/else statement to check leap year conditions
  if (year % 4 === 0) {
    // If divisible by 4, check if it's also divisible by 100
    if (year % 100 === 0) {
      // If divisible by 100, check if it's also divisible by 400
      if (year % 400 === 0) {
        // User Story 5: Return appropriate message
        return `${year} is a leap year.`;
      } else {
        return `${year} is not a leap year.`;
      }
    } else {
      return `${year} is a leap year.`;
    }
  } else {
    return `${year} is not a leap year.`;
  }
}

// User Story 2: Declare a variable year that stores the value of the year to check
let year = 2024;

// User Story 6: Call isLeapYear function with year as argument and assign to result
let result = isLeapYear(year);

// User Story 7: Output the result to console
console.log(result);

// Test with different years to verify the logic
console.log("\n--- Testing different years ---");
console.log(isLeapYear(2000)); // Should be leap year (divisible by 400)
console.log(isLeapYear(1900)); // Should not be leap year (divisible by 100 but not 400)
console.log(isLeapYear(2004)); // Should be leap year (divisible by 4 but not 100)
console.log(isLeapYear(2001)); // Should not be leap year (not divisible by 4)
