function flowers(input) {
  let chrysanthemumsCount = Number(input[0]);
  let rosesCount = Number(input[1]);
  let tulipsCount = Number(input[2]);
  let season = input[3];
  let holiday = input[4];

  let totalPrice = 0;
  let totalFlowerCount = 0;
  let chrysanthemumsPrice = 0;
  let rosesPrice = 0;
  let tulipsPrice = 0;
  if (season === "Spring" || season === "Summer") {
    totalFlowerCount = chrysanthemumsCount + rosesCount + tulipsCount;
    chrysanthemumsPrice = chrysanthemumsCount * 2;
    rosesPrice = rosesCount * 4.1;
    tulipsPrice = tulipsCount * 2.5;
    switch (holiday) {
      case "Y":
        if (totalFlowerCount <= 7) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 1.15 + 2;
        } else if (totalFlowerCount <= 20) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 1.15 * 0.95 + 2;
        } else {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 1.15 * 0.8 + 2;
        }
        break;

      case "N":
        if (totalFlowerCount <= 7) {
          totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice + 2;
        } else if (totalFlowerCount <= 20) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 0.95 + 2;
        } else {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 0.8 + 2;
        }

        break;
    }
  } else if (season === "Winter") {
    totalFlowerCount = chrysanthemumsCount + rosesCount + tulipsCount;
    chrysanthemumsPrice = chrysanthemumsCount * 3.75;
    rosesPrice = rosesCount * 4.5;
    tulipsPrice = tulipsCount * 4.15;
    switch (holiday) {
      case "Y":
        if (totalFlowerCount < 10) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 1.15 + 2;
        } else if (totalFlowerCount <= 20) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) *
              0.9 *
              1.15 *
              0.95 +
            2;
        } else {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) *
              0.8 *
              1.15 *
              0.8 +
            2;
        }
        break;

      case "N":
        if (totalFlowerCount < 10) {
          totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice + 2;
        } else if (totalFlowerCount <= 20) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 0.9 + 2;
        } else {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 0.8 + 2;
        }

        break;
    }
  } else {
    totalFlowerCount = chrysanthemumsCount + rosesCount + tulipsCount;
    chrysanthemumsPrice = chrysanthemumsCount * 3.75;
    rosesPrice = rosesCount * 4.5;
    tulipsPrice = tulipsCount * 4.15;
    switch (holiday) {
      case "Y":
        if (totalFlowerCount < 20) {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 1.15 + 2;
        } else {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) *
              0.8 *
              1.15 *
              0.8 +
            2;
        }
        break;

      case "N":
        if (totalFlowerCount < 20) {
          totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice + 2;
        } else {
          totalPrice =
            (chrysanthemumsPrice + rosesPrice + tulipsPrice) * 0.8 + 2;
        }

        break;
    }
  }
  console.log(totalPrice.toFixed(2));
}

flowers(["3", "10", "9", "Winter", "N"]);
