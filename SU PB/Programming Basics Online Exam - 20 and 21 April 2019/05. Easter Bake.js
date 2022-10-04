function bake(input) {
  let breadCount = Number(input[0]);

  let totalSugarGr = 0;
  let totalflowerGr = 0;
  let maxSugar = 0;
  let maxFlour = 0;

  for (let i = 1; i < input.length - 1; i += 2) {
    let sugarGr = Number(input[i]);
    let flowerGr = Number(input[i + 1]);
    if (sugarGr > maxSugar) {
      maxSugar = sugarGr;
    }

    if (flowerGr > maxFlour) {
      maxFlour = flowerGr;
    }

    totalSugarGr += sugarGr;
    totalflowerGr += flowerGr;
  }

  let neededSugar = Math.ceil(totalSugarGr / 950);
  let neededFlour = Math.ceil(totalflowerGr / 750);

  console.log(`Sugar: ${neededSugar}`);
  console.log(`Flour: ${neededFlour}`);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}

bake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
