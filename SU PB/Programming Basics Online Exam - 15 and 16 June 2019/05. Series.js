function series(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;

  let seriesCount = Number(input[index]);
  index++;

  let counter = 0;
  let totalPrice = 0;

  while (counter < seriesCount) {
    counter += 1;
    let seriesName = input[index];
    index++;
    let seriesPrice = Number(input[index]);
    index++;
    if (seriesName === "Thrones") {
      seriesPrice = seriesPrice * 0.5;
    } else if (seriesName === "Lucifer") {
      seriesPrice = seriesPrice * 0.6;
    } else if (seriesName === "Protector") {
      seriesPrice = seriesPrice * 0.7;
    } else if (seriesName === "TotalDrama") {
      seriesPrice = seriesPrice * 0.8;
    } else if (seriesName === "Area") {
      seriesPrice = seriesPrice * 0.9;
    }

    totalPrice += seriesPrice;
  }

  if (budget >= totalPrice) {
    console.log(
      `You bought all the series and left with ${(budget - totalPrice).toFixed(
        2
      )} lv.`
    );
  } else {
    console.log(
      `You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`
    );
  }
}

series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
