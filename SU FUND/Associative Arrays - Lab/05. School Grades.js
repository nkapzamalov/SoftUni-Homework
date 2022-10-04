function solve(input) {
  let studentsGrades = {};

  for (let line of input) {
    let name = line.split(" ")[0];
    let grades = line.split(" ").slice(1);

    if (studentsGrades.hasOwnProperty(name)) {
      let oldGrades = studentsGrades[name];
      studentsGrades[name] = grades.concat(oldGrades);
    } else {
      studentsGrades[name] = grades;
    }
  }

  let studentsGradesEntries = Object.entries(studentsGrades).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let kvp of studentsGradesEntries) {
    console.log(`${kvp[0]}: ${avarageGrades(kvp[1]).toFixed(2)}`);
  }

  function avarageGrades(grades) {
    let result = 0;

    for (let key of grades) {
      result += Number(key);
    }

    result = result / grades.length;
    return result;
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
