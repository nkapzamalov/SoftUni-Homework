function truckDiver(input) {
  let season = input[0];
  let kmPerMonth = Number(input[1]);

  let salary = 0;

  switch (season) {
    case "Spring":
    case "Autumn":
      if (kmPerMonth <= 5000) {
        salary = kmPerMonth * 0.75;
      } else {
        salary = kmPerMonth * 0.95;
      }
      break;
    case "Summer":
      if (kmPerMonth <= 5000) {
        salary = kmPerMonth * 0.9;
      } else {
        salary = kmPerMonth * 1.1;
      }
      break;
    case "Winter":
      if (kmPerMonth <= 5000) {
        salary = kmPerMonth * 1.05;
      } else {
        salary = kmPerMonth * 1.25;
      }
  }
  if (kmPerMonth > 10000) {
    salary = kmPerMonth * 1.45;
  }

  salary = salary * 0.9 * 4;

  console.log(salary.toFixed(2));
}

truckDiver(["Spring", "1600"]);
