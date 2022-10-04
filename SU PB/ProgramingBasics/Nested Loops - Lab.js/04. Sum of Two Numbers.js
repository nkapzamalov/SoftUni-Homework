function sumOfTwoNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let magicNumber = Number(input[2]);

  let flag = false;
  let counter = 0;

  for (let x1 = n1; x1 <= n2; x1++) {
    for (let x2 = n1; x2 <= n2; x2++) {
      counter += 1;
      if (x1 + x2 === magicNumber) {
        console.log(
          `Combination N:${counter} (${x1} + ${x2} = ${magicNumber})`
        );
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  if (!flag) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}

sumOfTwoNumbers(["88", "888", "1000"]);
