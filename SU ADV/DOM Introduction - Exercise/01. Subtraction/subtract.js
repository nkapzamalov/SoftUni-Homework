function subtract() {
  let firstNumberElement = document.getElementById("firstNumber");
  let secondNumberElement = document.getElementById("secondNumber");

  let firstNumber = firstNumberElement.value;
  let secondNumber = secondNumberElement.value;

  let result = firstNumber - secondNumber;

  let resultElement = document.getElementById("result");
  resultElement.innerText = result;
}
