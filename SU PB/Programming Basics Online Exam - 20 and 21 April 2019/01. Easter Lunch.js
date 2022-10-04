function easterLunch(input) {
  let kozunaciCount = Number(input[0]);
  let packageEggCount = Number(input[1]);
  let cookiesKg = Number(input[2]);

  let kozunakTotalPrice = kozunaciCount * 3.2;
  let totalEggPrice = packageEggCount * 4.35;
  let totalcookesPrice = cookiesKg * 5.4;
  let totalPaintEggPrice = packageEggCount * 12 * 0.15;

  let totalPrice =
    kozunakTotalPrice + totalPaintEggPrice + totalEggPrice + totalcookesPrice;

  console.log(totalPrice.toFixed(2));
}

easterLunch(["4", "4", "3"]);
