function walking(input) {
  let index = 0;
  let command = input[index];
  index++;

  let stepCounter = 0;

  while (command !== "Going home") {
    let steps = Number(command);

    stepCounter += steps;

    if (stepCounter >= 10000) {
      console.log("Goal reached! Good job!");
      console.log(`${stepCounter - 10000} steps over the goal!`);
      break;
    }
    command = input[index];
    index++;
  }

  if (command === "Going home") {
    command = Number(input[index]);
    index++;
    stepCounter += command;
    if (stepCounter <= 10000) {
      console.log(`${10000 - stepCounter} more steps to reach goal.`);
    } else {
      console.log("Goal reached! Good job!");
      console.log(`${stepCounter - 10000} steps over the goal!`);
    }
  }
}

walking(["1000", "1500", "2000", "6500"]);
