function carePuppy(input) {
  let index = 0;
  let dogFood = Number(input[index]) * 1000;
  index++;
  let command = input[index];
  index++;
  let totalEatenFood = 0;

  while (command !== "Adopted") {
    let foodEatenByMeal = Number(command);
    totalEatenFood += foodEatenByMeal;
    command = input[index];
    index++;
  }

  if (command === "Adopted") {
    if (dogFood >= totalEatenFood) {
      console.log(
        `Food is enough! Leftovers: ${dogFood - totalEatenFood} grams.`
      );
    } else {
      console.log(
        `Food is not enough. You need ${totalEatenFood - dogFood} grams more.`
      );
    }
  }
}

carePuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
