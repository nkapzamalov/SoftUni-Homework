function maxNumber(arr) {
  let biggestArrNum = "";
  let largestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      largestNumber = arr[i];
    }
    if (arr[i] > arr[i + 1] || i === arr.length - 1) {
      biggestArrNum += `${arr[i]} `;
    }

    if (largestNumber === arr[arr.length - 1]) {
      biggestArrNum = `${arr[arr.length - 1]}`;
    }
  }

  console.log(biggestArrNum);
}

maxNumber([41, 41, 34, 20]);
