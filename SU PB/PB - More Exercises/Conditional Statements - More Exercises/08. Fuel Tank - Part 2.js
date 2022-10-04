function fuelTankP2(input) {
  let fuelType = input[0];
  let fuelQuantity = Number(input[1]);
  let clulbCard = input[2];
  let totalPrice = 0;

  if (fuelType === "Gas") {
    if (clulbCard === "Yes") {
      if (fuelQuantity < 20) {
        totalPrice = (0.93 - 0.08) * fuelQuantity;
      } else if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice =
          (0.93 - 0.08) * fuelQuantity - (0.93 - 0.08) * fuelQuantity * 0.08;
      } else {
        totalPrice =
          (0.93 - 0.08) * fuelQuantity - (0.93 - 0.08) * fuelQuantity * 0.1;
      }
    } else {
      if (fuelQuantity < 20) {
        totalPrice = 0.93 * fuelQuantity;
      } else if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice = 0.93 * fuelQuantity - 0.93 * fuelQuantity * 0.08;
      } else {
        totalPrice = 0.93 * fuelQuantity - 0.93 * fuelQuantity * 0.1;
      }
    }
  } else if (fuelType === "Gasoline") {
    if (clulbCard === "Yes") {
      if (fuelQuantity < 20) {
        totalPrice = (2.22 - 0.18) * fuelQuantity;
      } else if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice =
          (2.22 - 0.18) * fuelQuantity - (2.22 - 0.18) * fuelQuantity * 0.08;
      } else {
        totalPrice =
          (2.22 - 0.18) * fuelQuantity - (2.22 - 0.18) * fuelQuantity * 0.1;
      }
    } else {
      if (fuelQuantity < 20) {
        totalPrice = 2.22 * fuelQuantity;
      } else if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice = 2.22 * fuelQuantity - 2.22 * fuelQuantity * 0.08;
      } else {
        totalPrice = 2.22 * fuelQuantity - 2.22 * fuelQuantity * 0.1;
      }
    }
  } else if (fuelType === "Diesel") {
    if (clulbCard === "Yes") {
      if (fuelQuantity < 20) {
        totalPrice = (2.33 - 0.12) * fuelQuantity;
      } else if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice =
          (2.33 - 0.12) * fuelQuantity - (2.33 - 0.12) * fuelQuantity * 0.08;
      } else {
        totalPrice =
          (2.33 - 0.12) * fuelQuantity - (2.33 - 0.12) * fuelQuantity * 0.1;
      }
    } else {
      if (fuelQuantity < 20) {
        totalPrice = 2.33 * fuelQuantity;
      } else if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice = 2.33 * fuelQuantity - 2.33 * fuelQuantity * 0.08;
      } else {
        totalPrice = 2.33 * fuelQuantity - 2.33 * fuelQuantity * 0.1;
      }
    }
  }

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

fuelTankP2(["Gasoline", "25", "No"]);
