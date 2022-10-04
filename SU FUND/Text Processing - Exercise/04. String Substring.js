function solve(wordToCheck, text) {
  let hasWord = false;

  for (let word of text.split(" ")) {
    if (word.toLowerCase() === wordToCheck.toLowerCase()) {
      console.log(word.toLowerCase());
      hasWord = true;
      break;
    }
  }

  if (!hasWord) {
    console.log(`${wordToCheck} not found!`);
  }
}

solve("python", "JavaScript is the best programming language");
