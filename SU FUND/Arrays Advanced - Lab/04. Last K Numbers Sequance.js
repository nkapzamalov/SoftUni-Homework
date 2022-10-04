function lastKNumbers(n, k) {
  let result = [];
  result[0] = 1;
  for (let i = 0; i < n - 1; i++) {
    let sum = 0;
    let counter = 0;
    for (let x = 0; x < k; x++) {
      if (result.length < k) {
        for (let y = 0; y < result.length; y++) {
          sum += result[i];
        }
        break;
      } else {
        sum += result[i - x];
      }
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}

lastKNumbers(2, 6);
