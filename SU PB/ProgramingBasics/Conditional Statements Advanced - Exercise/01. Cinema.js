function cinema(input) {
  let projectionType = input[0];
  let rowCount = Number(input[1]);
  let columnCount = Number(input[2]);

  let totalIncome = 0;
  let totalSeats = rowCount * columnCount;

  if (projectionType === "Premiere") {
    totalIncome = totalSeats * 12;
  } else if (projectionType === "Normal") {
    totalIncome = totalSeats * 7.5;
  } else {
    totalIncome = totalSeats * 5;
  }

  console.log(`${totalIncome.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);
