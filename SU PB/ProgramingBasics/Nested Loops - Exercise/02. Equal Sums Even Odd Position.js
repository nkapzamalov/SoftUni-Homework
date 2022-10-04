function equalSums(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  buff = "";

  for (let i = n1; i <= n2; i++) {
    let number = i.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < number.length; index++) {
      let digitNumber = Number(number[index]);
      let position = index + 1;

      if (position % 2 === 0) {
        evenSum += digitNumber;
      } else {
        oddSum += digitNumber;
      }
    }
    if (evenSum === oddSum) {
      buff += `${number} `;
    }
  }
  console.log(buff);
}

equalSums(["100000", "100050"]);
