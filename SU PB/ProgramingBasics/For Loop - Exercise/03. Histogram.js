function histogram(input) {
  let numberCount = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= numberCount; i++) {
    let numbers = Number(input[i]);

    if (numbers < 200) {
      p1 += 1;
    } else if (numbers < 400) {
      p2 += 1;
    } else if (numbers < 600) {
      p3 += 1;
    } else if (numbers < 800) {
      p4 += 1;
    } else {
      p5 += 1;
    }
  }

  let percP1 = (p1 / numberCount) * 100;
  let percP2 = (p2 / numberCount) * 100;
  let percP3 = (p3 / numberCount) * 100;
  let percP4 = (p4 / numberCount) * 100;
  let percP5 = (p5 / numberCount) * 100;

  console.log(`${percP1.toFixed(2)}%`);
  console.log(`${percP2.toFixed(2)}%`);
  console.log(`${percP3.toFixed(2)}%`);
  console.log(`${percP4.toFixed(2)}%`);
  console.log(`${percP5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
