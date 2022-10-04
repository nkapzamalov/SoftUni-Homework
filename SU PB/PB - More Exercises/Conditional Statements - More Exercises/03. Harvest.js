function harverst(input) {
  let squareMeterLand = Number(input[0]);
  let grapeKgPer1CBM = Number(input[1]);
  let requiredLitersWine = Number(input[2]);
  let workersCount = Number(input[3]);

  let squareMeterLandForWine = squareMeterLand * 0.4;
  let totalGrapeKg = squareMeterLandForWine * grapeKgPer1CBM;
  let totalLitersWine = totalGrapeKg / 2.5;

  if (totalLitersWine < requiredLitersWine) {
    let missingWine = requiredLitersWine - totalLitersWine;
    console.log(
      `It will be a tough winter! More ${Math.floor(
        missingWine
      )} liters wine needed.`
    );
  } else {
    let leftWine = totalLitersWine - requiredLitersWine;
    let winePerWorker = leftWine / workersCount;

    console.log(
      `Good harvest this year! Total wine: ${Math.floor(
        totalLitersWine
      )} liters.`
    );
    console.log(
      `${Math.ceil(leftWine)} liters left -> ${Math.ceil(
        winePerWorker
      )} liters per person.`
    );
  }
}

harverst(["1020", "1.5", "425", "4"]);
