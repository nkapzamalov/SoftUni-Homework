function grades(input) {
  let studentsCount = Number(input[0]);
  let failGrade = 0;
  let grade300399 = 0;
  let grade400499 = 0;
  let topGrade = 0;
  let totalGrade = 0;
  for (let i = 1; i <= studentsCount; i++) {
    let studentGrade = Number(input[i]);
    totalGrade += studentGrade;
    if (studentGrade <= 2.99) {
      failGrade += 1;
    } else if (studentGrade <= 3.99) {
      grade300399 += 1;
    } else if (studentGrade <= 4.99) {
      grade400499 += 1;
    } else {
      topGrade += 1;
    }
  }

  console.log(
    `Top students: ${((topGrade / studentsCount) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 4.00 and 4.99: ${((grade400499 / studentsCount) * 100).toFixed(
      2
    )}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${((grade300399 / studentsCount) * 100).toFixed(
      2
    )}%`
  );
  console.log(`Fail: ${((failGrade / studentsCount) * 100).toFixed(2)}%`);
  console.log(`Average: ${(totalGrade / studentsCount).toFixed(2)}`);
}

grades([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);
