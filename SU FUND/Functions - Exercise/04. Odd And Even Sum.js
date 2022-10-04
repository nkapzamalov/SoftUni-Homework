function oddAndEvenSum(number) {
  let oddSum = oddNumbersSum(number);
  let evenSum = evenNumbersSum(number);
  let totalSum = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  console.log(totalSum);

  function oddNumbersSum(num) {
    let numberString = num.toString();
    let result = 0;
    for (i = 0; i < numberString.length; i++) {
      if (numberString[i] % 2 !== 0) {
        result += Number(numberString[i]);
      }
    }
    return result;
  }

  function evenNumbersSum(num) {
    let numberString = num.toString();
    let result = 0;
    for (i = 0; i < numberString.length; i++) {
      if (numberString[i] % 2 === 0) {
        result += Number(numberString[i]);
      }
    }
    return result;
  }
}
oddAndEvenSum(3495892137259234);
