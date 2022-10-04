function reception(input) {
  let firstEmployee = Number(input.shift());
  let secondEmployee = Number(input.shift());
  let thirdEmployee = Number(input.shift());
  let studentsCount = Number(input.shift());

  let totalEmployees = firstEmployee + secondEmployee + thirdEmployee;

  let counterHours = 0;

  for (let i = 0; studentsCount > 0; i++) {
    counterHours += 1;
    if (counterHours % 4 !== 0) {
      studentsCount -= totalEmployees;
    }
  }
  console.log(`Time needed: ${counterHours}h.`);
}

reception(["1", "2", "3", "45"]);
