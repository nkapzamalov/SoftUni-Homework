function barcode(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let buff = ``;

  for (let i = n1; i <= n2; i++) {
    let iToStr = i.toString();
    let isValid = true;

    for (let index = 0; index < iToStr.length; index++) {
      let iToStrDigit = Number(iToStr[index]);
      if (iToStrDigit % 2 === 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      buff += `${iToStr} `;
    }
  }
  console.log(buff);
}

barcode(["2345", "6579"]);
