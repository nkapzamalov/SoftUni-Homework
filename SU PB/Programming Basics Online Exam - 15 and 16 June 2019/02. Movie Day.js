function movieDay(input) {
  let neededShootingTime = Number(input[0]);
  let scenesCount = Number(input[1]);
  let sceneLength = Number(input[2]);

  let preparationTime = neededShootingTime * 0.15;
  let totalShootingTime = scenesCount * sceneLength;

  if (neededShootingTime >= preparationTime + totalShootingTime) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        neededShootingTime - preparationTime - totalShootingTime
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(
        preparationTime + totalShootingTime - neededShootingTime
      )} minutes.`
    );
  }
}

movieDay(["60", "15", "3"]);
