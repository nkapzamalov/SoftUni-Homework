function oscars(input) {
  let index = 0;
  let actorName = input[index];
  index++;
  let academyPoints = Number(input[index]);
  index++;
  let judgeCount = Number(input[index]);
  index++;

  let totalPoints = academyPoints;

  for (i = 0; i < judgeCount; i++) {
    let currentPoints = 0;
    let judgeName = input[index];
    index++;
    let judgePoints = Number(input[index]);
    index++;
    currentPoints = (judgeName.length * judgePoints) / 2;
    totalPoints += currentPoints;

    if (totalPoints >= 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (totalPoints < 1205.5) {
    console.log(
      `Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`
    );
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
