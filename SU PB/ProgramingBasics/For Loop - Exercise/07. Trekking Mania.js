function trekkingMania(input) {
  let groupCount = Number(input[0]);

  let group1 = 0;
  let group2 = 0;
  let group3 = 0;
  let group4 = 0;
  let group5 = 0;
  let totalPeople = 0;

  for (i = 1; i < input.length; i++) {
    let peopleCount = Number(input[i]);

    if (peopleCount <= 5) {
      group1 += peopleCount;
    } else if (peopleCount <= 12) {
      group2 += peopleCount;
    } else if (peopleCount <= 25) {
      group3 += peopleCount;
    } else if (peopleCount <= 40) {
      group4 += peopleCount;
    } else {
      group5 += peopleCount;
    }

    totalPeople += peopleCount;
  }

  let group1Perc = (group1 / totalPeople) * 100;
  let group2Perc = (group2 / totalPeople) * 100;
  let group3Perc = (group3 / totalPeople) * 100;
  let group4Perc = (group4 / totalPeople) * 100;
  let group5Perc = (group5 / totalPeople) * 100;

  console.log(`${group1Perc.toFixed(2)}%`);
  console.log(`${group2Perc.toFixed(2)}%`);
  console.log(`${group3Perc.toFixed(2)}%`);
  console.log(`${group4Perc.toFixed(2)}%`);
  console.log(`${group5Perc.toFixed(2)}%`);
}

trekkingMania([
  "10",

  "10",

  "5",

  "1",

  "100",

  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
