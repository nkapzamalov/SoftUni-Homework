function vacation(groupOfpeople, typeOfGroup, dayOfTheWeek) {
  let price = 0;

  switch (typeOfGroup) {
    case "Students":
      if (dayOfTheWeek === "Friday") {
        price = groupOfpeople * 8.45;
      } else if (dayOfTheWeek === "Saturday") {
        price = groupOfpeople * 9.8;
      } else {
        price = groupOfpeople * 10.46;
      }
      if (groupOfpeople >= 30) {
        price = price * 0.85;
      }
      break;

    case "Business":
      if (dayOfTheWeek === "Friday") {
        price = groupOfpeople * 10.9;
      } else if (dayOfTheWeek === "Saturday") {
        price = groupOfpeople * 15.6;
      } else {
        price = groupOfpeople * 16;
      }
      if (groupOfpeople >= 100) {
        price = price - (price / groupOfpeople) * 10;
      }
      break;

    case "Regular":
      if (dayOfTheWeek === "Friday") {
        price = groupOfpeople * 15;
      } else if (dayOfTheWeek === "Saturday") {
        price = groupOfpeople * 20;
      } else {
        price = groupOfpeople * 22.5;
      }
      if (groupOfpeople >= 10 && groupOfpeople <= 20) {
        price = price * 0.95;
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");
