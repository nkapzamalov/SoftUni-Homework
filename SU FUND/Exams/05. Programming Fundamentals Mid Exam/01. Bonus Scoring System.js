function solve(input) {
  let numberOfStudents = Number(input[0]);
  let numberOfLectures = Number(input[1]);
  let bonus = Number(input[2]);

  let maxBonus = 0;
  let attendetLecturesForMaxBonus = 0;

  for (let i = 3; i < input.length; i++) {
    let totalBonus = (Number(input[i]) / numberOfLectures) * (5 + bonus);

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      attendetLecturesForMaxBonus = input[i];
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(
    `The student has attended ${attendetLecturesForMaxBonus} lectures.`
  );
}

solve([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
