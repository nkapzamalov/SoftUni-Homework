function solve(input) {
  let wordsCounts = {};

  let counter = 0;

  let words = input.slice(0, 1).toString().split(" ");
  let wordsToCheck = input.slice(1);

  for (let word of words) {
    wordsCounts[word] = counter;
  }

  for (let currentWord of wordsToCheck) {
    if (wordsCounts.hasOwnProperty(currentWord)) {
      wordsCounts[currentWord] += 1;
    }
  }

  let wordsCountsSort = Object.entries(wordsCounts).sort((a, b) => b[1] - a[1]);

  for (let kvp of wordsCountsSort) {
    console.log(`${kvp[0]} - ${kvp[1]}`);
  }
}

solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
