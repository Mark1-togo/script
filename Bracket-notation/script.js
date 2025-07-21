let greetings = "Hello";
console.log(greetings[0]);
console.log(greetings[greetings.length - 1]);
let firstTwo = greetings[0] + greetings[1];
console.log(firstTwo);

//scaping using \n. Creating new line
let poem =
  "She sell sea shell at the sea shore, \n also the brown quick fox jumped over the fence";
console.log(poem);

//scaping inner quotes using backslash - can be used to write spacial characters such as the opening quotes
let word = 'Hello, Im doing, "javascript"';
console.log(word);

let quote = "It's a beautiful day!";
console.log(quote);

//finding position of a substring
let sentence = "He likes Ugali";
//returns -1, cause bread is not in the string
let position = sentence.indexOf("bread");
// search position starting at a particular point
let pos = sentence.indexOf("likes", 3);
console.log(pos);
const str = "I am learning JavaScript.";
console.log(str.indexOf("Javascript"));

//prompt() Takes two arguments:message on the dialogue box , default value
let userName = prompt("What is your name?", "Tony");
