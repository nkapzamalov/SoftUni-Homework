function oscars(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let judgeCount = input[2];

  let totalPoints = academyPoints;
  let totalPointsFromJudge = 0;
  for (let i = 3; i < input.length; i += 2) {
    let judgeName = input[i];
    let pointsGiven = Number(input[i + 1]);

    totalPointsFromJudge = (judgeName.length * pointsGiven) / 2;
    totalPoints += totalPointsFromJudge;

    if (totalPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
          1
        )}!`
      );
      return;
    }
  }

  console.log(
    `Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`
  );
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
