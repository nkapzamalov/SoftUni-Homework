function aluminumJoinery(input) {
  let cealCount = Number(input[0]);
  let cealType = input[1];
  let delivery = input[2];

  let totalPrice = 0;

  switch (cealType) {
    case "90X130":
      if (cealCount <= 30) {
        totalPrice = cealCount * 110;
      } else if (cealCount <= 60) {
        totalPrice = cealCount * 110 * 0.95;
      } else {
        totalPrice = cealCount * 110 * 0.92;
      }

      break;

    case "100X150":
      if (cealCount <= 40) {
        totalPrice = cealCount * 140;
      } else if (cealCount <= 80) {
        totalPrice = cealCount * 140 * 0.94;
      } else {
        totalPrice = cealCount * 140 * 0.9;
      }

      break;

    case "130X180":
      if (cealCount <= 20) {
        totalPrice = cealCount * 190;
      } else if (cealCount <= 50) {
        totalPrice = cealCount * 190 * 0.92;
      } else {
        totalPrice = cealCount * 190 * 0.88;
      }
      break;

    case "200X300":
      if (cealCount <= 25) {
        totalPrice = cealCount * 250;
      } else if (cealCount <= 50) {
        totalPrice = cealCount * 250 * 0.91;
      } else {
        totalPrice = cealCount * 250 * 0.86;
      }
      break;
  }

  if (delivery === "With delivery") {
    totalPrice = totalPrice + 60;
  }
  if (cealCount > 99) {
    totalPrice = totalPrice * 0.96;
  }
  if (cealCount < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${totalPrice.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["2", "130X180", "With delivery"]);
