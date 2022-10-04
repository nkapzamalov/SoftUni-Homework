function solve(words, text) {
  for (let word of words.split(", ")) {
    text = text.replace("*".repeat(word.length), word);
  }

  console.log(text);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
