function inventory(input) {
  let result = [];
  let index = 0;
  let startingItems = input[index].split(", ");
  for (let i = 0; i < startingItems.length; i++) {
    result.push(startingItems[i]);
  }

  index++;
  let commands = input[index];
  index++;

  while (commands !== "Craft!") {
    let command = commands.split(" - ");
    let item = command[1];
    let indexOfCommand = result.indexOf(item);
    if (command[0] === "Collect") {
      if (indexOfCommand <= -1) {
        result.push(command[1]);
      }
    } else if (command[0] === "Drop") {
      if (indexOfCommand > -1) {
        result.splice(indexOfCommand, 1);
      }
    } else if (command[0] === "Renew") {
      if (result.length > 1) {
        if (indexOfCommand > -1) {
          let movedItem = result.splice(indexOfCommand, indexOfCommand + 1);
          result.push(movedItem.toString());
        }
      }
    } else {
      let separateItem = item.split(":");
      let item1 = separateItem[0];
      let item2 = separateItem[1];
      indexOfCommand = result.indexOf(item1);
      if (indexOfCommand > -1) {
        result.splice(indexOfCommand + 1, 0, item2);
      }
    }

    commands = input[index];
    index++;
  }

  console.log(result.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
