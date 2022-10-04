function solve(numbers) {
  result = 0;

  for (i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) % 2 === 0) {
      result += Number(numbers[i]);
    }
  }

  console.log(result);
}

solve(["1", "2", "3", "4", "5", "6"]);
