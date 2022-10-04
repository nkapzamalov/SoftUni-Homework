function palindromeIntegers(positiveIntegers) {
  for (i = 0; i < positiveIntegers.length; i++) {
    let result = reverseInteger(positiveIntegers[i]);
    console.log(result === positiveIntegers[i]);
  }

  function reverseInteger(number) {
    let result = "";
    while (number > 0) {
      let reversingNumber = number % 10;
      result += `${reversingNumber}`;
      number = Math.trunc(number / 10);
    }
    return Number(result);
  }
}

palindromeIntegers([123, 323, 421, 121]);
