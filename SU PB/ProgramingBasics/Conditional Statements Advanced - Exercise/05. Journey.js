function jorney(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let price = 0;
  let destination = "";
  let vacationType = "";
  if (season === "summer") {
    if (budget <= 100) {
      price = budget * 0.3;
      destination = "Bulgaria";
      vacationType = "Camp";
    } else if (budget <= 1000) {
      price = budget * 0.4;
      destination = "Balkans";
      vacationType = "Camp";
    } else {
      price = budget * 0.9;
      destination = "Europe";
      vacationType = "Hotel";
    }
  } else {
    if (budget <= 100) {
      price = budget * 0.7;
      destination = "Bulgaria";
      vacationType = "Hotel";
    } else if (budget <= 1000) {
      price = budget * 0.8;
      destination = "Balkans";
      vacationType = "Hotel";
    } else {
      price = budget * 0.9;
      destination = "Europe";
      vacationType = "Hotel";
    }
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${price.toFixed(2)}`);
}
jorney(["1500", "summer"]);
