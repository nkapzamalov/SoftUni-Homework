function dishwasher(input) {
  let index = 0;
  let botlesCount = Number(input[index]);
  index++;
  let totalMl = botlesCount * 750;
  let command = input[index];
  index++;
  let disheshCount = 0;
  let potsCont = 0;
  let totalMlNeeded = 0;
  let counter = 0;

  while (command !== "End") {
    let thingsForCleaning = Number(command);
    counter += 1;
    if (counter % 3 === 0) {
      potsCont += thingsForCleaning;
      totalMlNeeded += thingsForCleaning * 15;
    } else {
      disheshCount += thingsForCleaning;
      totalMlNeeded += thingsForCleaning * 5;
    }
    if (totalMlNeeded > totalMl) {
      console.log(
        `Not enough detergent, ${totalMlNeeded - totalMl} ml. more necessary!`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log(`Detergent was enough!`);
    console.log(`${disheshCount} dishes and ${potsCont} pots were washed.`);
    console.log(`Leftover detergent ${totalMl - totalMlNeeded} ml.`);
  }
}

dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
