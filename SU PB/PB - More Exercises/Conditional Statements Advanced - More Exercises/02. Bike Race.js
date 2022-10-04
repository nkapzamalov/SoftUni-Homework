function bikeRace(input) {
  let youngCycle = Number(input[0]);
  let oldCycle = Number(input[1]);
  let trace = input[2];

  let fund = 0;

  switch (trace) {
    case "trail":
      fund = youngCycle * 5.5 + oldCycle * 7;

      break;

    case "cross-country":
      if (youngCycle + oldCycle < 50) {
        fund = youngCycle * 8 + oldCycle * 9.5;
      } else {
        fund = (youngCycle * 8 + oldCycle * 9.5) * 0.75;
      }

      break;

    case "downhill":
      fund = youngCycle * 12.25 + oldCycle * 13.75;

      break;

    case "road":
      fund = youngCycle * 20 + oldCycle * 21.5;
      break;
  }

  fund = fund * 0.95;

  console.log(`${fund.toFixed(2)}`);
}

bikeRace(["30", "25", "cross-country"]);
