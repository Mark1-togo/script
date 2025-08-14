function isLeapYear(year) {
  if (year % 4 === 0) {
    return year + " Leap year";
  } else {
    return year + " Not a leap year";
  }
}
console.log(isLeapYear(2000));
