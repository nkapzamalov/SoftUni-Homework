function negativeAndPositiveNumbers(arr) {
  let result = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.unshift(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  for (i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

negativeAndPositiveNumbers(["7", "-2", "8", "9"]);
