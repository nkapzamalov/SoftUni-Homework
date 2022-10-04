function sumFirstAndLastNumber(arr) {
  let firstNumber = arr.shift();
  let lastNumber = arr.pop();

  let result = Number(firstNumber) + Number(lastNumber);

  console.log(result);
}

sumFirstAndLastNumber(["5", "10"]);
