function sumOddNum(n) {
  let oddNum = 1;
  let i = 1;
  let sum = 0;

  while (oddNum <= n) {
    if (i % 2 !== 0) {
      console.log(i);
      oddNum += 1;
      sum += i;
    }
    i++;
  }
  console.log(`Sum: ${sum}`);
}

sumOddNum(3);
