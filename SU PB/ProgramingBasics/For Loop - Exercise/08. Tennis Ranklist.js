function tennis(input) {
  let tournamentCount = Number(input[0]);
  let startingPoints = Number(input[1]);

  let totalPoints = startingPoints;
  let averagePoints = 0;
  let tournamentWinCount = 0;
  let percentWin = 0;
  for (i = 2; i < input.length; i++) {
    let tournamentResult = input[i];

    if (tournamentResult === "W") {
      totalPoints += 2000;
      tournamentWinCount += 1;
    } else if (tournamentResult === "F") {
      totalPoints += 1200;
    } else {
      totalPoints += 720;
    }

    averagePoints = (totalPoints - startingPoints) / tournamentCount;
    percentWin = (tournamentWinCount / tournamentCount) * 100;
  }
  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentWin.toFixed(2)}%`);
}

tennis(["4", "750", "SF", "W", "SF", "W"]);
