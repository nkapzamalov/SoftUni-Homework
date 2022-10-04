function trip(input) {
  let destination = input[0];
  let dates = input[1];
  let datesCount = input[2];

  let totalPrice = 0;

  switch (destination) {
    case "Germany":
      if (dates === "21-23") {
        totalPrice = datesCount * 32;
      } else if (dates === "24-27") {
        totalPrice = datesCount * 37;
      } else {
        totalPrice = datesCount * 43;
      }

      break;

    case "Italy":
      if (dates === "21-23") {
        totalPrice = datesCount * 28;
      } else if (dates === "24-27") {
        totalPrice = datesCount * 32;
      } else {
        totalPrice = datesCount * 39;
      }
      break;

    case "France":
      if (dates === "21-23") {
        totalPrice = datesCount * 30;
      } else if (dates === "24-27") {
        totalPrice = datesCount * 35;
      } else {
        totalPrice = datesCount * 40;
      }
      break;
  }

  console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}

trip(["France", "28-31", "8"]);
