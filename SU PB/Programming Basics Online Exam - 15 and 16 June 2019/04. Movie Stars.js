function movieStar(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let actorName = input[index];
  index++;
  let leftBudget = budget;

  while (actorName !== "ACTION") {
    if (actorName.length > 15) {
      leftBudget = leftBudget - leftBudget * 0.2;
      actorName = input[index];
      index++;
    }
    let salary = Number(input[index]);
    index++;
    if (leftBudget < salary) {
      console.log(
        `We need ${(salary - leftBudget).toFixed(2)} leva for our actors.`
      );
      break;
    }
    leftBudget -= salary;
    actorName = input[index];
    index++;
  }

  if (actorName === "ACTION") {
    console.log(`We are left with ${leftBudget} leva.`);
  }
}

movieStar([
  "2100000",
  "Homer Simpson",
  "1000000",
  "Tsvetomir Ivanovich",
  "ACTION",
]);
