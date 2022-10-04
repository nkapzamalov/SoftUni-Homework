function godzillaVsKong(input) {
  let budjet = Number(input[0]);
  let statistCount = Number(input[1]);
  let clothingStatist = Number(input[2]);

  let decorPrice = 0.1 * budjet;
  let totalClothingPrice = statistCount * clothingStatist;
  if (statistCount > 150) {
    let discount = totalClothingPrice * 0.1;
    totalClothingPrice = totalClothingPrice - discount;
  }

  let totalExpenses = decorPrice + totalClothingPrice;

  if (totalExpenses > budjet) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${(totalExpenses - budjet).toFixed(2)} leva more.`
    );
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budjet - totalExpenses).toFixed(
        2
      )} leva left.`
    );
  }
}

godzillaVsKong(["15437.62", "186", "57.99"]);
