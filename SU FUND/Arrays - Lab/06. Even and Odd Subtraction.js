function solve(numbers) {
  resultEven = 0;
  resultOdd = 0;

  for (i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) % 2 === 0) {
      resultEven += Number(numbers[i]);
    } else {
      resultOdd += Number(numbers[i]);
    }
  }

  console.log(resultEven - resultOdd);
}

solve([2, 4, 6, 8, 10]);
