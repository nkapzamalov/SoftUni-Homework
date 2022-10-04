function balls(input) {
  let totalBalls = Number(input[0]);

  let totalPoints = 0;
  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let otherColors = 0;
  let devidedBlack = 0;

  for (i = 1; i < totalBalls + 1; i++) {
    let colour = input[i];
    if (colour === "red") {
      redBalls += 1;
      totalPoints += 5;
    } else if (colour === "orange") {
      orangeBalls += 1;
      totalPoints += 10;
    } else if (colour === "yellow") {
      yellowBalls += 1;
      totalPoints += 15;
    } else if (colour === "white") {
      whiteBalls += 1;
      totalPoints += 20;
    } else if (colour === "black") {
      devidedBlack += 1;
      totalPoints = Math.floor(totalPoints / 2);
    } else {
      otherColors += 1;
    }
  }
  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${otherColors}`);
  console.log(`Divides from black balls: ${devidedBlack}`);
}

balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
