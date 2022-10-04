function shop(input) {
  let startingEggs = Number(input[0]);

  let index = 1;
  let totalSoldEggs = 0;
  let command = input[index];
  index++;

  while (command !== "Close") {
    let buyOrFill = command;
    let eggs = Number(input[index]);
    index++;

    if (buyOrFill === "Buy") {
      if (startingEggs < eggs) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${startingEggs}.`);
        break;
      }
      startingEggs -= eggs;
      totalSoldEggs += eggs;
    }
    if (buyOrFill === "Fill") {
      startingEggs += eggs;
    }

    command = input[index];
    index++;
  }
  if (command === "Close") {
    console.log(`Store is closed!`);
    console.log(`${totalSoldEggs} eggs sold.`);
  }
}

shop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
