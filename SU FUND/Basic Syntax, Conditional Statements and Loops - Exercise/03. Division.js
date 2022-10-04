function division(number) {
  let divisible = 0;
  if (number % 10 === 0) {
    divisible = 10;
  } else if (number % 7 === 0) {
    divisible = 7;
  } else if (number % 6 === 0) {
    divisible = 6;
  } else if (number % 3 === 0) {
    divisible = 3;
  } else if (number % 2 === 0) {
    divisible = 2;
  }

  if (divisible === 0) {
    console.log("Not divisable");
  } else {
    console.log(`The number is divisible by ${divisible}`);
  }
}

division(1643);
