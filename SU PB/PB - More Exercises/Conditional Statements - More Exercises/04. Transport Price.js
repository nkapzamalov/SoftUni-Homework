function tranportPrice(input) {
  let distance = Number(input[0]);
  let timeOfDay = input[1];
  let price = 0;

  if (distance < 20 && timeOfDay === "day") {
    price = 0.7 + distance * 0.79;
  } else if (distance < 20 && timeOfDay === "night") {
    price = 0.7 + distance * 0.9;
  } else if (distance >= 20 && distance < 100) {
    price = 0.09 * distance;
  } else {
    price = 0.06 * distance;
  }

  console.log(price.toFixed(2));
}

tranportPrice(["75", "day"]);
