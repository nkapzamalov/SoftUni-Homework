function logistics(input) {
  let cargoCount = Number(input[0]);

  let busPrice = 0;
  let truckPrice = 0;
  let trainPrice = 0;
  let totalBusPrice = 0;
  let totalTruckPrice = 0;
  let totalTrainPrice = 0;
  let totalCargoWeight = 0;
  let totalWeightPrice = 0;
  let avPrice = 0;
  let busCargoWeight = 0;
  let truckCargoWeight = 0;
  let trainCaroWeight = 0;
  let trainPerc = 0;
  let busPerc = 0;
  let truckPerc = 0;

  for (i = 1; i <= cargoCount; i++) {
    let cargoWeight = Number(input[i]);
    totalCargoWeight += cargoWeight;
    if (cargoWeight <= 3) {
      busPrice = cargoWeight * 200;
      totalBusPrice += busPrice;
      busCargoWeight += cargoWeight;
    } else if (cargoWeight <= 11) {
      truckPrice = cargoWeight * 175;
      totalTruckPrice += truckPrice;
      truckCargoWeight += cargoWeight;
    } else {
      trainPrice = cargoWeight * 120;
      totalTrainPrice += trainPrice;
      trainCaroWeight += cargoWeight;
    }

    totalWeightPrice = totalBusPrice + totalTrainPrice + totalTruckPrice;
    avPrice = (totalWeightPrice / totalCargoWeight).toFixed(2);
    busPerc = (busCargoWeight / totalCargoWeight) * 100;
    truckPerc = (truckCargoWeight / totalCargoWeight) * 100;
    trainPerc = (trainCaroWeight / totalCargoWeight) * 100;
  }

  console.log(avPrice);
  console.log(`${busPerc.toFixed(2)}%`);
  console.log(`${truckPerc.toFixed(2)}%`);
  console.log(`${trainPerc.toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
