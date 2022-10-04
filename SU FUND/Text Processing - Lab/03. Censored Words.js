function solve(sentence, word) {
  while (sentence.indexOf(word) > -1) {
    sentence = sentence.replace(word, "*".repeat(word.length));
  }

  console.log(sentence);
}

solve("A small sentence with some words", "small");
