function easterEggs(input) {
  let paintedEggs = Number(input[0]);

  let redCount = 0;
  let orangeCount = 0;
  let blueCount = 0;
  let greenCount = 0;
  let bestColour = "";

  for (i = 1; i < paintedEggs + 1; i++) {
    let colour = input[i];

    if (colour === "red") {
      redCount++;
    } else if (colour === "orange") {
      orangeCount++;
    } else if (colour === "blue") {
      blueCount++;
    } else {
      greenCount++;
    }
  }

  if (redCount > orangeCount && redCount > blueCount && redCount > greenCount) {
    bestColour = "red";
  } else if (
    orangeCount > redCount &&
    orangeCount > blueCount &&
    orangeCount > greenCount
  ) {
    bestColour = "orange";
  } else if (
    blueCount > redCount &&
    blueCount > orangeCount &&
    blueCount > greenCount
  ) {
    bestColour = "blue";
  } else {
    bestColour = "green";
  }

  let mostEggs = Math.max(redCount, orangeCount, blueCount, greenCount);

  console.log(`Red eggs: ${redCount}`);
  console.log(`Orange eggs: ${orangeCount}`);
  console.log(`Blue eggs: ${blueCount}`);
  console.log(`Green eggs: ${greenCount}`);
  console.log(`Max eggs: ${mostEggs} -> ${bestColour}`);
}

easterEggs(["4", "blue", "red", "blue", "orange"]);
