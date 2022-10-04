function solve(input) {
  input = input.toLowerCase().split(" ");

  let wordsCount = {};

  let counter = 1;
  for (let word of input) {
    if (wordsCount.hasOwnProperty(word)) {
      wordsCount[word.toString()] += 1;
    } else {
      wordsCount[word.toString()] = counter;
    }
  }

  let resultNumbers = [];
  let resultStrings = [];

  for (let key in wordsCount) {
    if (wordsCount[key] % 2 !== 0) {
      if (Number(key)) {
        resultNumbers.push(key);
      } else {
        resultStrings.push(key);
      }
    }
  }

  let result = resultStrings.concat(resultNumbers);

  console.log(result.join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
