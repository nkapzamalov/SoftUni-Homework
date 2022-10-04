function vet(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let totalTaxes = 0;

  for (i = 0; i < days; i++) {
    let day = i + 1;
    let dayTax = 0;
    for (x = 0; x < hours; x++) {
      let hour = x + 1;
      if (hour % 2 === 0 && day % 2 !== 0) {
        dayTax += 1.25;
      } else if (hour % 2 !== 0 && day % 2 === 0) {
        dayTax += 2.5;
      } else {
        dayTax += 1;
      }
    }
    totalTaxes += dayTax;
    console.log(`Day: ${day} - ${dayTax.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalTaxes.toFixed(2)} leva`);
}
vet(["2", "5"]);
