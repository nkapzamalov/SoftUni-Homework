function foodPets(input) {
  let totalDays = Number(input[0]);
  let totalFood = Number(input[1]);
  let dayCounter = 0;
  let totalFoodDog = 0;
  let totalFoodCat = 0;
  let totalFoodEaten = 0;
  let biscuitsGift = 0;

  for (i = 2; i < input.length; i += 2) {
    dayCounter += 1;
    let foodEatenByDog = Number(input[i]);
    let foodEatenByCat = Number(input[i + 1]);
    totalFoodCat += foodEatenByCat;
    totalFoodDog += foodEatenByDog;
    if (dayCounter % 3 === 0) {
      biscuitsGift += Math.round((foodEatenByCat + foodEatenByDog) * 0.1);
    }
  }
  totalFoodEaten = totalFoodCat + totalFoodDog;
  console.log(`Total eaten biscuits: ${biscuitsGift}gr.`);
  console.log(
    `${((totalFoodEaten / totalFood) * 100).toFixed(
      2
    )}% of the food has been eaten.`
  );
  console.log(
    `${((totalFoodDog / totalFoodEaten) * 100).toFixed(2)}% eaten from the dog.`
  );
  console.log(
    `${((totalFoodCat / totalFoodEaten) * 100).toFixed(2)}% eaten from the cat.`
  );
}

foodPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
