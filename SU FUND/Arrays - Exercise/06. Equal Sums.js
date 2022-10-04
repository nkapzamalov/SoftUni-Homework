function equalSums(arr) {
  let result = "no";
  for (let index = 0; index < arr.length; index++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < index; i++) {
      leftSum += arr[i];
    }

    for (let i = index + 1; i < arr.length; i++) {
      rightSum += arr[i];
    }

    if (leftSum === rightSum) {
      result = index;
      break;
    }
  }
  console.log(result);
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
