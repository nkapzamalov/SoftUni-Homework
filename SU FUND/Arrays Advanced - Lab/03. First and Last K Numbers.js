function firstAndLast(arr) {
  let k = arr.shift();

  let firstElements = arr.slice(0, k);
  let lastElemnts = arr.slice(arr.length - k);

  console.log(firstElements.join(" "));
  console.log(lastElemnts.join(" "));
}

firstAndLast([2, 7, 8, 9]);
