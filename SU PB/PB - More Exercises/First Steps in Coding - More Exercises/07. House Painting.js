function housePainting(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);

  let frontWall = x * x - 1.2 * 2;
  let backWall = x * x;
  let sideWall = x * y - 1.5 * 1.5;

  let wall = frontWall + backWall + sideWall * 2;

  let wallPaint = (wall / 3.4).toFixed(2);

  let frontBackRoof = (x * h) / 2;
  let sideRoof = x * y;

  let roof = frontBackRoof * 2 + sideRoof * 2;

  let roofPainit = (roof / 4.3).toFixed(2);

  console.log(wallPaint);
  console.log(roofPainit);
}

housePainting(["6", "10", "5.2"]);
