function flowerShop(input) {
  let magnoliiCount = Number(input[0]);
  let zuimbuiliCount = Number(input[1]);
  let roseCount = Number(input[2]);
  let cactusCount = Number(input[3]);
  let presentPrice = Number(input[4]);

  let magnoliiProfit = magnoliiCount * 3.25;
  let zuimbuiliProfit = zuimbuiliCount * 4;
  let roseProfit = roseCount * 3.5;
  let cactusProfit = cactusCount * 8;

  let totalProfit =
    magnoliiProfit + zuimbuiliProfit + roseProfit + cactusProfit;

  let totalProfitWithTax = totalProfit - totalProfit * 0.05;

  if (totalProfitWithTax >= presentPrice) {
    console.log(
      `She is left with ${Math.floor(totalProfitWithTax - presentPrice)} leva.`
    );
  } else {
    console.log(
      `She will have to borrow ${Math.ceil(
        presentPrice - totalProfitWithTax
      )} leva.`
    );
  }
}

flowerShop(["2", "3", "5", "1", "50"]);
