function battle(input) {
  let index = 0;
  let player1Eggs = Number(input[index]);
  index++;
  let player2Eggs = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  while (command !== "End") {
    if (command === "one") {
      player2Eggs -= 1;
    } else {
      player1Eggs -= 1;
    }

    if (player1Eggs <= 0) {
      console.log(
        `Player one is out of eggs. Player two has ${player2Eggs} eggs left.`
      );
      break;
    }

    if (player2Eggs <= 0) {
      console.log(
        `Player two is out of eggs. Player one has ${player1Eggs} eggs left.`
      );
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "End") {
    console.log(`Player one has ${player1Eggs} eggs left.`);
    console.log(`Player two has ${player2Eggs} eggs left.`);
  }
}

battle(["6", "3", "one", "two", "two", "one", "one"]);
