function calculator(numOne, numTwo, operator) {
  let operatoCase = null;
  switch (operator) {
    case "multiply":
      operatoCase = (a, b) => a * b;
      break;
    case "divide":
      operatoCase = (a, b) => a / b;
      break;
    case "add":
      operatoCase = (a, b) => a + b;
      break;
    case "subtract":
      operatoCase = (a, b) => a - b;
      break;
  }
  let result = operatoCase(numOne, numTwo);
  console.log(result);
}

calculator(40, 8, "divide");
