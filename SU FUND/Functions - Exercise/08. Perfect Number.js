function perfectNumber(number) {
  let result = 0;
  for (i = number; i > 0; i--) {
    if (number % i === 0) {
      result += i;
    }
  }
  if (result - number === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(6);
