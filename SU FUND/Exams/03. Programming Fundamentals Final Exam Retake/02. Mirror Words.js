function solve(input) {
  let stringToCheck = input[0];
  let regex = /([@|#])[a-zA-Z]+\1{2}[a-zA-Z]+\1/g;

  let stringsToCheck = stringToCheck.match(regex);
  if (stringsToCheck === null) {
    console.log("No word pairs found!");
    console.log("No mirror words! ");
  } else {
    let counter = 0;
    let mirrorWords = [];
    let counterMirrorWords = 0;
    let wordOne = "";
    let wordTwo = "";
    for (let line of stringsToCheck) {
      if (line.indexOf("##") > -1) {
        [wordOne, wordTwo] = line.slice(1, line.length - 1).split("##");
      } else if (line.indexOf("@@") > -1) {
        [wordOne, wordTwo] = line.slice(1, line.length - 1).split("@@");
      }

      if (wordOne.length > 2 && wordTwo.length > 2) {
        counter += 1;
        if (wordOne === wordTwo.split("").reverse().join("")) {
          mirrorWords.push(`${wordOne} <=> ${wordTwo}`);
          counterMirrorWords += 1;
        }
      }
    }
    if (counter === 0 && counterMirrorWords === 0) {
      console.log("No word pairs found!");
      console.log("No mirror words! ");
    } else if (counter > 0 && counterMirrorWords === 0) {
      console.log(`${counter} word pairs found!`);
      console.log("No mirror words! ");
    } else {
      console.log(`${counter} word pairs found!`);
      console.log("The mirror words are:");
      console.log(`${mirrorWords.join(", ")}`);
    }
  }
}

solve(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
