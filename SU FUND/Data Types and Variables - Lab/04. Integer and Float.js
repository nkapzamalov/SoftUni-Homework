function integerAndFloat(num1, num2, num3) {
  let totalSum = num1 + num2 + num3;
  let type = "";

  if (totalSum % 1 !== 0) {
    type = "Float";
  } else {
    type = "Integer";
  }
  console.log(`${totalSum} - ${type}`);
}

integerAndFloat(9, 100, 1.1);
