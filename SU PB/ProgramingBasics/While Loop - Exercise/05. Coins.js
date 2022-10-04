function coins(input) {
  let coins = Number(input[0]);

  coins = Math.round(coins * 100);

  let coinCounter = 0;

  while (coins > 0) {
    if (coins >= 200) {
      coinCounter += 1;
      coins -= 200;
    } else if (coins >= 100) {
      coinCounter += 1;
      coins -= 100;
    } else if (coins >= 50) {
      coinCounter += 1;
      coins -= 50;
    } else if (coins >= 20) {
      coinCounter += 1;
      coins -= 20;
    } else if (coins >= 10) {
      coinCounter += 1;
      coins -= 10;
    } else if (coins >= 5) {
      coinCounter += 1;
      coins -= 5;
    } else if (coins >= 2) {
      coinCounter += 1;
      coins -= 2;
    } else {
      coinCounter += 1;
      coins -= 1;
    }
  }
  console.log(coinCounter);
}

coins(["453"]);
