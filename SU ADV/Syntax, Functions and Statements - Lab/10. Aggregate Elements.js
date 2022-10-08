function solve(array) {
  let sum = 0;
  let inverseSum = 0;
  let concat = "";
  for (let num of array) {
    sum += num;
    inverseSum += 1 / num;
    concat += num.toString();
  }

  console.log(sum);
  console.log(inverseSum);
  console.log(concat);
}

solve([2, 4, 8, 16]);
