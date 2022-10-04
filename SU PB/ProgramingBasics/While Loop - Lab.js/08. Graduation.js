function graduation(input) {
  let index = 0;
  let studentName = input[index];
  index++;
  let studentGrade = Number(input[index]);
  index++;
  let classCounter = 0;
  let expeldCounter = 0;
  let gradeCounter = 0;

  while (classCounter < 12) {
    gradeCounter += studentGrade;
    if (studentGrade < 4) {
      expeldCounter += 1;
    }
    if (expeldCounter > 1) {
      console.log(`${studentName} has been excluded at ${classCounter} grade`);
      break;
    }
    classCounter += 1;
    studentGrade = Number(input[index]);
    index++;
  }
  if (classCounter === 12) {
    console.log(
      `${studentName} graduated. Average grade: ${(
        gradeCounter / classCounter
      ).toFixed(2)}`
    );
  }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
