function examPreparation(input) {
  let index = 0;
  let badGrades = Number(input[index]);
  index++;
  let taskName = input[index];
  index++;
  let grade = Number(input[index]);
  index++;
  let badGradesCounter = 0;
  let gradesSum = 0;
  let taskCount = 0;
  let lastTask = "";

  while (taskName !== "Enough") {
    if (grade <= 4) {
      badGradesCounter += 1;
    }
    gradesSum += grade;
    taskCount += 1;

    if (badGradesCounter === badGrades) {
      console.log(`You need a break, ${badGradesCounter} poor grades.`);
      break;
    }

    lastTask = taskName;
    taskName = input[index];
    index++;
    grade = Number(input[index]);
    index++;
  }
  if (taskName === "Enough") {
    console.log(`Average score: ${(gradesSum / taskCount).toFixed(2)}`);
    console.log(`Number of problems: ${taskCount}`);
    console.log(`Last problem: ${lastTask}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "SpringTime",
  "5",
  "Bus",
  "6",
  "Enough",
]);
