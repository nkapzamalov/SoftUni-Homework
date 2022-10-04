function addAndSubtract(num1, num2, num3) {
  let sum = sumNumbers(num1, num2);
  let result = subtractNumbers(sum, num3);

  console.log(result);

  function sumNumbers(a, b) {
    return a + b;
  }

  function subtractNumbers(a, b) {
    return a - b;
  }
}

addAndSubtract(23, 6, 10);
