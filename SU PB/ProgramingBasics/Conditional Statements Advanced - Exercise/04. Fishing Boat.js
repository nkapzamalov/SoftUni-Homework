function fishingBount(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermanCount = Number(input[2]);

  let price = 0;

  switch (season) {
    case "Spring":
      if (fishermanCount <= 6) {
        price = 3000 * 0.9;
      } else if (fishermanCount <= 11) {
        price = 3000 * 0.85;
      } else {
        price = 3000 * 0.75;
      }
      if (fishermanCount % 2 === 0) {
        price = price * 0.95;
      }
      break;

    case "Summer":
      if (fishermanCount <= 6) {
        price = 4200 * 0.9;
      } else if (fishermanCount <= 11) {
        price = 4200 * 0.85;
      } else {
        price = 4200 * 0.75;
      }
      if (fishermanCount % 2 === 0) {
        price = price * 0.95;
      }
      break;

    case "Autumn":
      if (fishermanCount <= 6) {
        price = 4200 * 0.9;
      } else if (fishermanCount <= 11) {
        price = 4200 * 0.85;
      } else {
        price = 4200 * 0.75;
      }
      break;

    case "Winter":
      if (fishermanCount <= 6) {
        price = 2600 * 0.9;
      } else if (fishermanCount <= 11) {
        price = 2600 * 0.85;
      } else {
        price = 2600 * 0.75;
      }
      if (fishermanCount % 2 === 0) {
        price = price * 0.95;
      }
      break;
  }
  if (budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(
      ` Not enough money! You need ${(price - budget).toFixed(2)} leva.`
    );
  }
}

fishingBount(["2000", "Winter", "13"]);
