function division(input) {
  let numberCount = Number(input[0]);

  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;

  for (i = 1; i < numberCount + 1; i++) {
    let number = input[i];

    if (number % 2 === 0) {
      p1Count++;
      if (number % 3 === 0) {
        p2Count++;
      }
      if (number % 4 === 0) {
        p3Count++;
      }
    } else if (number % 3 === 0) {
      p2Count++;
      if (number % 2 === 0) {
        p1Count++;
      }
      if (number % 4 === 0) {
        p3Count;
      }
    } else if (number % 4 === 0) {
      p3Count++;
      if (number % 3 === 0) {
        p2Count++;
      }
      if (number % 2 === 0) {
        p1Count++;
      }
    }
  }

  console.log(`${((p1Count / numberCount) * 100).toFixed(2)}%`);
  console.log(`${((p2Count / numberCount) * 100).toFixed(2)}%`);
  console.log(`${((p3Count / numberCount) * 100).toFixed(2)}%`);
}

division(["3", "3", "6", "9"]);
