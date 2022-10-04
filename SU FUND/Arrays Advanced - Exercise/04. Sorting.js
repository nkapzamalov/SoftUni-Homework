function sorting(arr) {
  let length = arr.length;

  let sortArr = arr.sort((a, b) => a - b);
  let result = [];

  for (i = 0; i < length; i++) {
    let biggestNumber = sortArr.pop();
    let smallestNumber = sortArr.shift();

    result.push(biggestNumber, smallestNumber);
  }

  console.log(result.join(" "));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
