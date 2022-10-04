function filmPremiere(input) {
  let filmName = input[0];
  let filmPackage = input[1];
  let ticketsCount = Number(input[2]);
  let totalPrice = 0;

  switch (filmName) {
    case "John Wick":
      if (filmPackage === "Drink") {
        totalPrice = ticketsCount * 12;
      } else if (filmPackage === "Popcorn") {
        totalPrice = ticketsCount * 15;
      } else {
        totalPrice = ticketsCount * 19;
      }

      break;
    case "Star Wars":
      if (filmPackage === "Drink") {
        totalPrice = ticketsCount * 18;
      } else if (filmPackage === "Popcorn") {
        totalPrice = ticketsCount * 25;
      } else {
        totalPrice = ticketsCount * 30;
      }
      if (ticketsCount >= 4) {
        totalPrice = totalPrice * 0.7;
      }
      break;
    case "Jumanji":
      if (filmPackage === "Drink") {
        totalPrice = ticketsCount * 9;
      } else if (filmPackage === "Popcorn") {
        totalPrice = ticketsCount * 11;
      } else {
        totalPrice = ticketsCount * 14;
      }
      if (ticketsCount === 2) {
        totalPrice = totalPrice * 0.85;
      }
      break;
  }
  console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["Jumanji", "Menu", "2"]);
