function skiTrip(input) {
  let dayRest = Number(input[0]);
  let typeRest = input[1];
  let feedback = input[2];

  let price = 0;
  let nightRest = dayRest - 1;

  switch (typeRest) {
    case "room for one person":
      price = nightRest * 18;
      break;

    case "apartment":
      if (nightRest < 10) {
        price = nightRest * 25 * 0.7;
      } else if (nightRest <= 15) {
        price = nightRest * 25 * 0.65;
      } else {
        price = nightRest * 25 * 0.5;
      }

      break;

    case "president apartment":
      if (nightRest < 10) {
        price = nightRest * 35 * 0.9;
      } else if (nightRest <= 15) {
        price = nightRest * 35 * 0.85;
      } else {
        price = nightRest * 35 * 0.8;
      }

      break;
  }
  if (feedback === "positive") {
    price = price * 1.25;
  } else {
    price = price * 0.9;
  }

  console.log(price.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);
