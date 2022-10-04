function movieDestination(input) {
  let filmBudget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let days = input[3];
  let neededBudget = 0;
  switch (destination) {
    case "Dubai":
      if (season === "Winter") {
        neededBudget = days * 45000 * 0.7;
      } else {
        neededBudget = days * 40000 * 0.7;
      }

      break;

    case "Sofia":
      if (season === "Winter") {
        neededBudget = days * 17000 * 1.25;
      } else {
        neededBudget = days * 12500 * 1.25;
      }

      break;

    default:
      if (season === "Winter") {
        neededBudget = days * 24000;
      } else {
        neededBudget = days * 20250;
      }
      break;
  }

  if (neededBudget <= filmBudget) {
    console.log(
      `The budget for the movie is enough! We have ${(
        filmBudget - neededBudget
      ).toFixed(2)} leva left!`
    );
  } else {
    console.log(
      `The director needs ${(neededBudget - filmBudget).toFixed(2)} leva more!`
    );
  }
}

movieDestination(["200000", "London", "Summer", "7"]);
