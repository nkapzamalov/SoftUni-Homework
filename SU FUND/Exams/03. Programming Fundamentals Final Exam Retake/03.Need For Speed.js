function solve(input) {
  let cars = input.slice(1, Number(input[0]) + 1);
  let commands = input.slice(Number(input[0]) + 1);

  let carInformation = {};

  for (let line of cars) {
    let [model, mileage, fuel] = line.split("|");

    mileage = Number(mileage);
    fuel = Number(fuel);

    if (!carInformation.hasOwnProperty(model)) {
      carInformation[model] = { mileage: mileage, fuel: fuel };
    }
  }

  for (let line of commands) {
    let command = line.split(" : ")[0];

    if (command === "Stop") {
      for (let key in carInformation) {
        console.log(
          `${key} -> Mileage: ${carInformation[key].mileage} kms, Fuel in the tank: ${carInformation[key].fuel} lt.`
        );
      }
    } else if (command === "Drive") {
      [command, carModel, distance, fuelLeters] = line.split(" : ");
      distance = Number(distance);
      fuelLeters = Number(fuelLeters);
      if (carInformation[carModel].fuel < fuelLeters) {
        console.log("Not enough fuel to make that ride");
      } else {
        carInformation[carModel].mileage += distance;
        carInformation[carModel].fuel -= fuelLeters;
        console.log(
          `${carModel} driven for ${distance} kilometers. ${fuelLeters} liters of fuel consumed.`
        );
        if (carInformation[carModel].mileage >= 100000) {
          console.log(`Time to sell the ${carModel}!`);
          delete carInformation[carModel];
        }
      }
    } else if (command === "Refuel") {
      [command, carModel, fuelLeters] = line.split(" : ");
      fuelLeters = Number(fuelLeters);
      if (carInformation[carModel].fuel + fuelLeters >= 75) {
        console.log(
          `${carModel} refueled with ${
            75 - carInformation[carModel].fuel
          } liters`
        );
        carInformation[carModel].fuel = 75;
      } else {
        carInformation[carModel].fuel += fuelLeters;
        console.log(`${carModel} refueled with ${fuelLeters} liters`);
      }
    } else {
      [command, carModel, distance] = line.split(" : ");
      distance = Number(distance);

      if (carInformation[carModel].mileage - distance >= 10000) {
        carInformation[carModel].mileage -= distance;
        console.log(`${carModel} mileage decreased by ${distance} kilometers`);
      } else {
        carInformation[carModel].mileage = 10000;
      }
    }
  }
}

solve([
  "1",

  "Mercedes CLS|11000|35",

  "Drive : Mercedes CLS : 94 : 11",

  "Revert : Mercedes CLS : 500",

  "Stop",
]);
