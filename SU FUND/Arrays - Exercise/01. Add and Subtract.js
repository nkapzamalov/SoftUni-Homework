function addOrSubtract(arr) {
  let letNewArr = [];
  let oldSum = 0;
  let newSum = 0;
  for (i = 0; i < arr.length; i++) {
    oldSum += arr[i];
    if (arr[i] % 2 === 0) {
      letNewArr[i] = arr[i] + i;
    } else {
      letNewArr[i] = arr[i] - i;
    }
    newSum += letNewArr[i];
  }

  console.log(letNewArr);
  console.log(oldSum);
  console.log(newSum);
}

addOrSubtract([-5, 11, 3, 0, 2]);
