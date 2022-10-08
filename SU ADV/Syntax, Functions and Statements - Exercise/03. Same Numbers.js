function solve(num) {
  let numToString = num.toString();

  let sum = 0;

  for (let char of numToString) {
    sum += Number(char);
  }

  let firstChar = numToString[0];
  let isValid = true;
  for (let i = 1; i < numToString.length; i++) {
    if (numToString[i] !== firstChar) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(sum);
}

solve(2222222);
