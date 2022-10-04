function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let typeClass = "";
  let typeCar = "";
  let carPrice = 0;

  if (season === "Summer") {
    typeCar = "Cabrio";
  } else {
    typeCar = "Jeep";
  }

  if (budget <= 100) {
    typeClass = "Economy class";
  } else {
    typeClass = "Compact class";
  }

  if (budget <= 100 && season === "Summer") {
    carPrice = budget * 0.35;
  } else if (budget <= 500 && season === "Summer") {
    carPrice = budget * 0.45;
  } else if (budget <= 100 && season === "Winter") {
    carPrice = budget * 0.65;
  } else if (budget <= 500 && season === "Winter") {
    carPrice = budget * 0.8;
  }

  if (budget >= 500) {
    typeClass = "Luxury class";
    typeCar = "Jeep";
    carPrice = budget * 0.9;
  }

  console.log(`${typeClass}`);
  console.log(`${typeCar} - ${carPrice.toFixed(2)}`);
}

carToGo(["1010", "Summer"]);
