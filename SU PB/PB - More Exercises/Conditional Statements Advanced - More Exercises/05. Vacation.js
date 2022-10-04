function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let placeToStay = "";
  let destination = "";
  let price = 0;

  if (budget <= 1000) {
    placeToStay = "Camp";
  } else if (budget <= 3000) {
    placeToStay = "Hut";
  } else {
    placeToStay = "Hotel";
  }

  if (season === "Summer") {
    destination = "Alaska";
  } else {
    destination = "Morocco";
  }

  if (placeToStay === "Camp" && season === "Summer") {
    price = budget * 0.65;
  } else if (placeToStay === "Hut" && season === "Summer") {
    price = budget * 0.8;
  }

  if (placeToStay === "Camp" && season === "Winter") {
    price = budget * 0.45;
  } else if (placeToStay === "Hut" && season === "Winter") {
    price = budget * 0.6;
  }

  if (placeToStay === "Hotel") {
    price = budget * 0.9;
  }

  console.log(`${destination} - ${placeToStay} - ${price.toFixed(2)}`);
}
vacation(["5000", "Winter"]);
