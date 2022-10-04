function hospital(input) {
  let periodTime = Number(input[0]);
  let doctors = 7;
  let treatedPatients = 0;
  let totalTreatedPatients = 0;
  let untreatedPatients = 0;
  let totalUntreatedPatients = 0;
  let day = 0;

  for (let i = 1; i <= periodTime; i++) {
    patientPerDay = Number(input[i]);
    day += 1;
    if (totalUntreatedPatients > totalTreatedPatients && day % 3 === 0) {
      doctors += 1;
    }

    if (patientPerDay <= doctors) {
      treatedPatients = patientPerDay;
      totalTreatedPatients += treatedPatients;
    } else {
      untreatedPatients = patientPerDay - doctors;
      treatedPatients = patientPerDay - untreatedPatients;
      totalUntreatedPatients += untreatedPatients;
      totalTreatedPatients += treatedPatients;
    }
  }

  console.log(`Treated patients: ${totalTreatedPatients}.`);
  console.log(`Untreated patients: ${totalUntreatedPatients}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"]);
