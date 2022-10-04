function number(input) {
  let numbersArray = input.split(" ");

  let totalSum = 0;

  for (let number of numbersArray) {
    totalSum += Number(number);
  }

  let avaregeNumber = totalSum / numbersArray.length;
  let greaterThaAvarageArray = [];

  for (let number of numbersArray) {
    if (Number(number) > avaregeNumber) {
      greaterThaAvarageArray.push(Number(number));
    }
  }
  greaterThaAvarageArray.sort((a, b) => b - a);

  let result = [];
  let counter = 0;
  for (let number of greaterThaAvarageArray) {
    counter += 1;
    if (counter <= 5) {
      result.push(number);
    } else {
      break;
    }
  }

  if (numbersArray.length > 1) {
    console.log(result.join(" "));
  } else {
    console.log("No");
  }
}

number("-1 -2");
