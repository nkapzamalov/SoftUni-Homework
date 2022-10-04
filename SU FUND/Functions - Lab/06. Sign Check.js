function signCheck(numOne, numTwo, numThree) {
  let result = Math.sign(numOne * numTwo * numThree);
  if (result >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
signCheck(0, 0, 0);
