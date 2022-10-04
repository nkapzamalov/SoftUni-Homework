function competition(input) {
  let index = 0;
  let breadCount = Number(input[index]);
  index++;
  let mostPoints = 0;
  let bestBaker = "";

  for (i = 1; i < breadCount + 1; i++) {
    let bakerName = input[index];
    index++;
    let command = input[index];
    index++;
    let bakerPoints = 0;
    while (command !== "Stop") {
      let grade = Number(command);
      bakerPoints += grade;
      command = input[index];
      index++;
    }

    if (command === "Stop") {
      if (bakerPoints > mostPoints) {
        mostPoints = bakerPoints;
        bestBaker = bakerName;
        console.log(`${bakerName} has ${bakerPoints} points.`);
        console.log(`${bakerName} is the new number 1!`);
      } else {
        console.log(`${bakerName} has ${bakerPoints} points.`);
      }
    }
  }
  console.log(`${bestBaker} won competition with ${mostPoints} points!`);
}

competition([
  "2",
  "Chef Angelov",
  "9",
  "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop",
]);
