function fuelTank(input) {
  let fuelType = input[0];
  let fuelLitre = Number(input[1]);

  if (fuelType === "Diesel") {
    if (fuelLitre >= 25) {
      console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
  } else if (fuelType === "Gasoline") {
    if (fuelLitre >= 25) {
      console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
  } else if (fuelType === "Gas") {
    if (fuelLitre >= 25) {
      console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
  } else {
    console.log("Invalid fuel!");
  }
}
fuelTank(["Asdasd", "15"]);
