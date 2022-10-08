function solve(wordOne, wordTwo, wordThree) {
  let sumLength = wordOne.length + wordTwo.length + wordThree.length;

  console.log(sumLength);
  console.log(Math.round(sumLength / 3));
}

solve("chocolate", "ice cream", "cake");
