function hotelRoom(input) {
  let month = input[0];
  let nightsCount = Number(input[1]);

  let priceApartment = 0;
  let priceStudio = 0;

  if (month === "May" || month === "October") {
    if (nightsCount <= 7) {
      priceStudio = nightsCount * 50;
      priceApartment = nightsCount * 65;
    } else if (nightsCount <= 14) {
      priceStudio = nightsCount * 50 * 0.95;
      priceApartment = nightsCount * 65;
    } else {
      priceStudio = nightsCount * 50 * 0.7;
      priceApartment = nightsCount * 65 * 0.9;
    }
  } else if (month === "June" || month === "September") {
    if (nightsCount <= 14) {
      priceStudio = nightsCount * 75.2;
      priceApartment = nightsCount * 68.7;
    } else {
      priceStudio = nightsCount * 75.2 * 0.8;
      priceApartment = nightsCount * 68.7 * 0.9;
    }
  } else {
    if (nightsCount <= 14) {
      priceStudio = nightsCount * 76;
      priceApartment = nightsCount * 77;
    } else {
      priceStudio = nightsCount * 76;
      priceApartment = nightsCount * 77 * 0.9;
    }
  }

  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["June", "14"]);
