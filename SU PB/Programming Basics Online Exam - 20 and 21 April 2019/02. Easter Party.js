function easterParty(input) {
  let guestCount = Number(input[0]);
  let mealPerPersonPrice = Number(input[1]);
  let budget = Number(input[2]);
  if (guestCount < 10) {
    mealPerPersonPrice;
  } else if (guestCount <= 15) {
    mealPerPersonPrice = mealPerPersonPrice * 0.85;
  } else if (guestCount <= 20) {
    mealPerPersonPrice = mealPerPersonPrice * 0.8;
  } else {
    mealPerPersonPrice = mealPerPersonPrice * 0.75;
  }

  let cakePrice = budget * 0.1;
  let totalPrice = mealPerPersonPrice * guestCount + cakePrice;

  if (budget > totalPrice) {
    console.log(
      `It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`
    );
  } else {
    console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
  }
}

easterParty(["8", "25", "340"]);
