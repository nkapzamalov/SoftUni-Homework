function risenedNumber(number, risenNumber) {
  let risendNumber = number;

  for (i = 1; i < risenNumber; i++) {
    risendNumber *= number;
  }
  console.log(risendNumber);
}

risenedNumber(3, 4);
