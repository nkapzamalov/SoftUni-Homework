function shopping(input) {
  let budjet = Number(input[0]);
  let videocardCount = Number(input[1]);
  let procesorCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let videocardPrice = 250 * videocardCount;
  let procesorPriceForOne = videocardPrice * 0.35;
  let procesorPrice = procesorCount * procesorPriceForOne;
  let ramPriceForOne = videocardPrice * 0.1;
  let ramPrice = ramCount * ramPriceForOne;

  let totalPrice = videocardPrice + procesorPrice + ramPrice;
  if (videocardCount > procesorCount) {
    let discount = totalPrice * 0.15;
    totalPrice = totalPrice - discount;
  }

  if (budjet >= totalPrice) {
    console.log(`You have ${(budjet - totalPrice).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(totalPrice - budjet).toFixed(
        2
      )} leva more!`
    );
  }
}

shopping(["920.45", "3", "1", "1"]);
