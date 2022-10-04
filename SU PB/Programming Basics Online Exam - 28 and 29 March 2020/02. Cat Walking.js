function catWalking(input) {
  let minuteWalking = Number(input[0]);
  let walkingCount = Number(input[1]);
  let caloriesCount = Number(input[2]);

  let totalMinuteWalking = minuteWalking * walkingCount;
  let totalCaloriesBurned = totalMinuteWalking * 5;

  if (totalCaloriesBurned >= caloriesCount * 0.5) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`
    );
  }
}

catWalking(["40", "2", "300"]);
