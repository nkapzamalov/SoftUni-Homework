function solve(input) {
  let wordsCount = {};

  for (let word of input) {
    let counter = 1;
    if (wordsCount.hasOwnProperty(word)) {
      wordsCount[word] += 1;
    } else {
      wordsCount[word] = counter;
    }
  }

  let wordsCountSort = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

  for (let kvp of wordsCountSort) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
