function pets(input) {
  let days = Number(input[0]);
  let leftFoodKg = Number(input[1]);
  let foodForDogPerDayKg = Number(input[2]);
  let foodForCatPerDayKg = Number(input[3]);
  let foodForTurtlePerDayGr = Number(input[4]);

  let foodForTurtlePerDayKg = foodForTurtlePerDayGr * 0.001;

  let totalDogFood = days * foodForDogPerDayKg;
  let totalCatFood = days * foodForCatPerDayKg;
  let totalTurtleFood = days * foodForTurtlePerDayKg;

  let totalFoodPets = totalCatFood + totalDogFood + totalTurtleFood;

  if (leftFoodKg >= totalFoodPets) {
    console.log(
      `${Math.floor(leftFoodKg - totalFoodPets)} kilos of food left.`
    );
  } else {
    console.log(
      `${Math.ceil(totalFoodPets - leftFoodKg)} more kilos of food are needed.`
    );
  }
}

pets(["2", "10", "1", "1", "1200"]);
