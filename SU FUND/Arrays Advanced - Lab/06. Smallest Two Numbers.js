function smallestTwoNumbers(arr) {
  let orderNumbers = arr.sort((a, b) => a - b);
  orderNumbers.splice(2);
  console.log(orderNumbers.join(" "));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
