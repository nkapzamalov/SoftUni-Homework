function train(input) {
  let index = 0;
  let juryCount = Number(input[index]);
  index++;
  let presentationText = input[index];
  index++;

  let totalGradeSum = 0;
  let gradeCounter = 0;

  while (presentationText !== "Finish") {
    let gradeSum = 0;
    for (i = 0; i < juryCount; i++) {
      let grade = Number(input[index]);
      index++;
      gradeSum += grade;
      totalGradeSum += grade;
      gradeCounter++;
    }
    console.log(`${presentationText} - ${(gradeSum / juryCount).toFixed(2)}.`);
    presentationText = input[index];
    index++;
  }
  console.log(
    `Student's final assessment is ${(totalGradeSum / gradeCounter).toFixed(
      2
    )}.`
  );
}
train([
  "3",

  "Arrays",

  "4.53",

  "5.23",

  "5.00",

  "Lists",

  "5.83",

  "6.00",

  "5.42",

  "Finish",
]);
