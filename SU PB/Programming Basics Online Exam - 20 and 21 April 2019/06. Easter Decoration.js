function decoration(input) {
  let clientsCount = Number(input[0]);
  let index = 1;
  let allClientPrice = 0;

  for (i = 1; i < clientsCount + 1; i++) {
    let command = input[index];
    index++;
    let totalprice = 0;
    let productCounter = 0;
    while (command !== "Finish") {
      productCounter += 1;
      let decoration = command;
      if (decoration === "basket") {
        totalprice += 1.5;
      } else if (decoration === "wreath") {
        totalprice += 3.8;
      } else {
        totalprice += 7;
      }
      command = input[index];
      index++;
    }
    if (command === "Finish") {
      if (productCounter % 2 === 0) {
        allClientPrice += totalprice * 0.8;
        console.log(
          `You purchased ${productCounter} items for ${(
            totalprice * 0.8
          ).toFixed(2)} leva.`
        );
      } else {
        allClientPrice += totalprice;
        console.log(
          `You purchased ${productCounter} items for ${totalprice.toFixed(
            2
          )} leva.`
        );
      }
    }
  }
  console.log(
    `Average bill per client is: ${(allClientPrice / clientsCount).toFixed(
      2
    )} leva.`
  );
}

decoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
