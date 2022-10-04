function vegMarket(input) {
  let vegKgPrice = Number(input[0]);
  let fruKgPrice = Number(input[1]);
  let totalKgVeg = Number(input[2]);
  let totalKgFru = Number(input[3]);

  let totalVegPrice = vegKgPrice * totalKgVeg;
  let totalFruPrice = fruKgPrice * totalKgFru;
  let totalPrice = ((totalFruPrice + totalVegPrice) / 1.94).toFixed(2);
  console.log(totalPrice);
}

vegMarket(["0.194", "19.4", "10", "10"]);
