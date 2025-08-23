function confirmEnding(str1, str2) {
  if (str1.length - 1 === str1.indexOf(str2)) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Tony", "n"));
