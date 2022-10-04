function bestPlayer(input) {
  let index = 0;
  let playerName = input[index];
  index++;
  let playerGoals = Number(input[index]);
  index++;
  let bestPlayer = "";
  let mostGoals = 0;
  while (playerName !== "END") {
    if (playerGoals >= 10) {
      bestPlayer = playerName;
      mostGoals = playerGoals;
      console.log(`${bestPlayer} is the best player!`);
      console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
      break;
    } else if (playerGoals >= 3 && mostGoals < playerGoals) {
      bestPlayer = playerName;
      mostGoals = playerGoals;
    } else if (playerGoals >= 0 && mostGoals < playerGoals) {
      bestPlayer = playerName;
      mostGoals = playerGoals;
    }

    playerName = input[index];
    index++;
    playerGoals = Number(input[index]);
    index++;
  }
  if (playerName === "END") {
    if (mostGoals >= 3) {
      console.log(`${bestPlayer} is the best player!`);
      console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
      console.log(`${bestPlayer} is the best player!`);
      console.log(`He has scored ${mostGoals} goals.`);
    }
  }
}

bestPlayer(["Silva", "5", "Harry Kane", "10"]);
