function load(input) {
  let index = 0;
  let trunckVolume = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let loadCounter = 0;

  while (command !== "End") {
    let loadVolume = Number(command);
    if (trunckVolume < loadVolume) {
      console.log(`No more space!`);
      console.log(`Statistic: ${loadCounter} suitcases loaded.
`);
      break;
    }
    loadCounter += 1;

    if (loadCounter % 3 === 0) {
      trunckVolume -= loadVolume * 1.1;
    } else {
      trunckVolume -= loadVolume;
    }

    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${loadCounter} suitcases loaded.`);
  }
}

load(["1200.2", "260", "380.5", "125.6", "305", "End"]);
