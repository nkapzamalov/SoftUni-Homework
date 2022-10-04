function shop(input) {
  let budget = Number(input[0]);

  let index = 1;
  let command = input[index];
  index++;
  let counter = 0;
  let totalSpend = 0;
  while (command !== "Stop") {
    counter++;
    let productPrice = Number(input[index]);
    index++;
    if (budget < productPrice) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${(productPrice - budget).toFixed(2)} leva`);
    }
    if (counter % 3 === 0) {
      budget -= productPrice * 0.5;
      totalSpend += productPrice * 0.5;
    } else {
      budget -= productPrice;
      totalSpend += productPrice;
    }
    command = input[index];
    index++;
  }

  if (command === "Stop") {
    console.log(
      `You bought ${counter} products for ${totalSpend.toFixed(2)} leva.`
    );
  }
}

shop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
