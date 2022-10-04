function specialNumbers(input) {
  let specialNumber = Number(input[0]);
  let specialNumberBuff = ``;

  for (let num = 1111; num <= 9999; num++) {
    let textNum = num.toString();
    let isMagicNumber = true;

    for (index = 0; index < textNum.length; index++) {
      let digitTextNum = Number(textNum[index]);

      for (let x = 0; x < 4; x++) {
        if (specialNumber % digitTextNum !== 0) {
          isMagicNumber = false;
          break;
        }
      }
    }
    if (isMagicNumber) {
      specialNumberBuff += `${textNum} `;
    }
  }
  console.log(`${specialNumberBuff} `);
}

specialNumbers(["16"]);
