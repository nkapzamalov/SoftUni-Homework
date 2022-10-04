function thatreTicket(typeOfDay, age) {
  let price = 0;
  switch (typeOfDay) {
    case "Weekday":
      if (age <= 18) {
        price = 12;
      } else if (age <= 64) {
        price = 18;
      } else {
        price = 12;
      }
      break;
    case "Weekend":
      if (age <= 18) {
        price = 15;
      } else if (age <= 64) {
        price = 20;
      } else {
        price = 15;
      }
      break;
    case "Holiday":
      if (age <= 18) {
        price = 5;
      } else if (age <= 64) {
        price = 12;
      } else {
        price = 10;
      }
      break;
  }
  if (age < 0 || age > 1000) {
    console.log("Error!");
  } else {
    console.log(`${price}$`);
  }
}

thatreTicket("Weekday", -12);
