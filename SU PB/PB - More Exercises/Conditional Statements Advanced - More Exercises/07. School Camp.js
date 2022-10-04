function schoolCamp(input) {
  let season = input[0];
  let groupType = input[1];
  let studentCount = Number(input[2]);
  let nightsCount = Number(input[3]);

  let nightsPrice = 0;
  let totalPrice = 0;
  let typeSport = "";

  switch (groupType) {
    case "boys":
    case "girls":
      if (season === "Winter") {
        nightsPrice = 9.6;
      } else if (season === "Spring") {
        nightsPrice = 7.2;
      } else {
        nightsPrice = 15;
      }

      break;
    case "mixed":
      if (season === "Winter") {
        nightsPrice = 10;
      } else if (season === "Spring") {
        nightsPrice = 9.5;
      } else {
        nightsPrice = 20;
      }
  }

  totalPrice = nightsPrice * nightsCount * studentCount;

  if (studentCount >= 50) {
    totalPrice = totalPrice * 0.5;
  } else if (studentCount >= 20 && studentCount < 50) {
    totalPrice = totalPrice * 0.85;
  } else if (studentCount >= 10 && studentCount < 20) {
    totalPrice = totalPrice * 0.95;
  }

  switch (season) {
    case "Winter":
      {
        if (groupType === "boys") {
          typeSport = "Judo";
        } else if (groupType === "girls") {
          typeSport = "Gymnastics";
        } else {
          typeSport = "Ski";
        }
      }

      break;

    case "Spring":
      {
        if (groupType === "boys") {
          typeSport = "Tennis";
        } else if (groupType === "girls") {
          typeSport = "Athletics";
        } else {
          typeSport = "Cycling";
        }
      }
      break;

    case "Summer": {
      if (groupType === "boys") {
        typeSport = "Football";
      } else if (groupType === "girls") {
        typeSport = "Volleyball";
      } else {
        typeSport = "Swimming";
      }
    }
  }

  console.log(`${typeSport} ${totalPrice.toFixed(2)} lv.`);
}

schoolCamp(["Winter", "mixed", "9", "15"]);
