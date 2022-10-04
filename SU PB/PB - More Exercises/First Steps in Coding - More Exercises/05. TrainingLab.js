function trainingLab(input) {
  let l = Number(input[0]);
  let w = Number(input[1]);

  let lSm = l * 100;
  let wSm = w * 100;
  let desctCount = Math.trunc((wSm - 100) / 70);
  let rowCount = Math.trunc(lSm / 120);

  let workPlaceCount = desctCount * rowCount - 3;

  console.log(workPlaceCount);
}
trainingLab(["15", "8.9"]);
