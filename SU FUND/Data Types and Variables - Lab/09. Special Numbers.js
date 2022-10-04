function specialNumbers(num) {
  let isSpecial = true;

  for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 7 || i === 11) {
      console.log(`${i} -> ${!isSpecial ? "True" : "False"}`);
    } else {
      console.log(`${i} -> ${isSpecial ? "True" : "False"}`);
    }
  }
}

specialNumbers(15);
