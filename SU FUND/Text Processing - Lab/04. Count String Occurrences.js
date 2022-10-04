function solve(sentence, wordsToCheck) {
  let counter = 0;
  let words = sentence.split(" ");

  for (let word of words) {
    if (word === wordsToCheck) {
      counter += 1;
    }
  }

  console.log(counter);
}

solve("This is a word and it also is a sentence", "is");
