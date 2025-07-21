let adjective;
adjective = "Good";
let noun = " boy";
let verb = "jumped";
let place = "house";
let adjective2 = "aged";
let noun2 = "beef";

let firstStory =
  "Once upon a time, there was a " +
  adjective +
  noun +
  " who loved to eat " +
  noun2 +
  "." +
  "The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("First story: " + firstStory);
adjective = "bad";
noun = " girl";
verb = "cry";
place = "city";
adjective2 = "tall";
noun2 = "chicken";
let secondStory =
  "Once upon a time, there was a " +
  adjective +
  noun +
  " who loved to eat " +
  noun2 +
  "." +
  "The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("Second story: " + secondStory);

//summery of js lesson 1 >Data types

console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence."
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");
