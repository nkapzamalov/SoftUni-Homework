function solve(n, elements) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = elements[i];
  }

  let resultString = "";
  for (let i = result.length - 1; i >= 0; i--) {
    resultString += `${result[i]} `;
  }

  console.log(resultString);
}

solve(3, [10, 20, 30, 40, 50]);
