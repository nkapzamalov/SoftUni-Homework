function football(input) {
  let stadiumCapacity = Number(input[0]);
  let totalFans = Number(input[1]);

  let sectorAFans = 0;
  let sectorBFans = 0;
  let sectorVFans = 0;
  let sectorGFans = 0;

  for (i = 2; i < input.length; i++) {
    let sector = input[i];
    if (sector === "A") {
      sectorAFans += 1;
    } else if (sector === "B") {
      sectorBFans += 1;
    } else if (sector === "V") {
      sectorVFans += 1;
    } else {
      sectorGFans += 1;
    }
  }

  let percSectorAFans = (sectorAFans / totalFans) * 100;
  let percSectorBFans = (sectorBFans / totalFans) * 100;
  let percSectorVFans = (sectorVFans / totalFans) * 100;
  let percSectorGFans = (sectorGFans / totalFans) * 100;

  let percTotalFans = (totalFans / stadiumCapacity) * 100;

  console.log(`${percSectorAFans.toFixed(2)}%`);
  console.log(`${percSectorBFans.toFixed(2)}%`);
  console.log(`${percSectorVFans.toFixed(2)}%`);
  console.log(`${percSectorGFans.toFixed(2)}%`);
  console.log(`${percTotalFans.toFixed(2)}%`);
}

football(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
