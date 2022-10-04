function solve(string) {
  let words = string.split(" ");

  for (let word of words) {
    if (word[0] === "#" && word.length > 1) {
      if (/^[a-zA-Z]+$/.test(word.substring(1))) {
        console.log(word.substring(1));
      }
    }
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
