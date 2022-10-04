function toyShop(input) {
  let vacantionPrice = Number(input[0]);
  let puzzelCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let puzzlePrice = 2.6 * puzzelCount;
  let dollPrice = 3 * dollCount;
  let bearPrice = 4.1 * bearCount;
  let minionPrice = 8.2 * minionCount;
  let truckPrice = 2 * truckCount;

  let totalCount =
    puzzelCount + dollCount + bearCount + minionCount + truckCount;
  let totalPrice =
    puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;

  if (totalCount >= 50) {
    let discount = totalPrice * 0.25;
    totalPrice = totalPrice - discount;
  }

  let rent = totalPrice * 0.1;

  totalPrice = totalPrice - rent;

  if (totalPrice >= vacantionPrice) {
    console.log(`Yes! ${(totalPrice - vacantionPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(vacantionPrice - totalPrice).toFixed(2)} lv needed.`
    );
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
