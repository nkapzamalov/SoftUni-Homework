function backToThePast(input) {
  let moneyRecieved = Number(input[0]);
  let yearToLive = Number(input[1]);

  let moneySpend = 0;
  let age = 17;
  for (i = 1800; i <= yearToLive; i++) {
    age += 1;
    if (i % 2 === 0) {
      moneySpend += 12000;
    } else {
      moneySpend += 12000 + age * 50;
    }
  }
  if (moneySpend <= moneyRecieved) {
    console.log(
      `Yes! He will live a carefree life and will have ${(
        moneyRecieved - moneySpend
      ).toFixed(2)} dollars left.`
    );
  } else {
    console.log(
      `He will need ${(moneySpend - moneyRecieved).toFixed(
        2
      )} dollars to survive.`
    );
  }
}

backToThePast(["100000.15", "1808"]);
