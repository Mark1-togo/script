let letter = "A";
console.log(letter.charCodeAt(0));
//fromCharCode
let char = String.fromCharCode(66);
console.log(char);

//.includes ()  check if the string contains specific substring. Returns true or false Case sensitive
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome", 5);
console.log(result);

//slice() Allows you to extract a portion of a string
/* Has the (startIndex, endIndex)*/
let sentence = "You're playing too much";
let view = sentence.slice(2, 3); // slice(7) extract the last characters from the index
view = sentence.slice(16);
console.log(view);

let text = "JavaScript";
let result2 = text.slice(0, 9);

result2 = text.slice(5, -3);
console.log(result2);

//toUpperCase  & toLowerCase
let greeting = "Hello World";
let upperCaseGreetings = greeting.toUpperCase();
console.log(upperCaseGreetings);

/* .replace(searchValue, newValue) allow you to replays values*/
upperCaseGreetings = greeting.replace("Hello", "Big");
console.log(upperCaseGreetings);

//repeat() allows you to repeat a string x number of times
let string2 = "hello!";
let words = string2.repeat(2);
console.log(words);

//Trimming whitespace on a string
/* trim()
trimStart() trimEnd()

let message2 = " hello ";
let trimmedStart = message2.trim();
console.log(trimmedStart);

*/
