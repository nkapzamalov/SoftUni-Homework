function intervals(input) {
  let turnsCount = Number(input[0]);
  let result = 0;
  let invalidNumber = 0;
  let totalResult = 0;
  let n09 = 0;
  let n1019 = 0;
  let n2029 = 0;
  let n3039 = 0;
  let n4050 = 0;

  for (let i = 1; i <= turnsCount; i++) {
    let number = Number(input[i]);

    if (number < 0 || number > 50) {
      invalidNumber += 1;
      result = totalResult / 2;
    } else if (number <= 9) {
      n09 += 1;
      result = number * 1.2;
    } else if (number <= 19) {
      n1019 += 1;
      result = number * 1.3;
    } else if (number <= 29) {
      n2029 += 1;
      result = number * 1.4;
    } else if (number <= 39) {
      n3039 += 1;
      result += 50;
    } else {
      n4050 += 1;
      result += 100;
    }
    totalResult = result;
  }
  console.log(`${totalResult.toFixed(2)}`);
  console.log(`From 0 to 9: ${((n09 / turnsCount) * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${((n1019 / turnsCount) * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${((n2029 / turnsCount) * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${((n3039 / turnsCount) * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${((n4050 / turnsCount) * 100).toFixed(2)}%`);
  console.log(
    `Invalid numbers: ${((invalidNumber / turnsCount) * 100).toFixed(2)}%`
  );
}
intervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
