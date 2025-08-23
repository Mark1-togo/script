function confirmEnding(str1, str2) {
  return str1.slice(-str2.length) === str2;
}
confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
);
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "sage");
confirmEnding("Open sesame", "game");
confirmEnding(
  "If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing",
  "mountain"
);
confirmEnding("Abstraction", "action");
