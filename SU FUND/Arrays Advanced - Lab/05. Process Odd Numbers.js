function processOddNumber(arr) {
  let oddArr = [];
  for (let index in arr) {
    if (index % 2 !== 0) {
      oddArr.push(arr[index]);
    }
  }

  let multiplyNumbers = oddArr.map(multiplyBy2);
  let finalResult = multiplyNumbers.reverse();

  function multiplyBy2(number) {
    number = number * 2;
    return number;
  }

  console.log(finalResult.join(" "));
}

processOddNumber([3, 0, 10, 4, 7, 3]);
