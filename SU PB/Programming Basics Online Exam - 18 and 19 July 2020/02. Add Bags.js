function bags(input) {
  let bagPrice = Number(input[0]);
  let kgBag = Number(input[1]);
  let daysLeft = Number(input[2]);
  let bagCount = Number(input[3]);

  totalPrice = 0;

  if (kgBag < 10) {
    bagPrice = bagPrice * 0.2;
    totalPrice = bagPrice * bagCount;
  } else if (kgBag <= 20) {
    bagPrice = bagPrice * 0.5;
    totalPrice = bagPrice * bagCount;
  } else {
    totalPrice = bagPrice * bagCount;
  }

  if (daysLeft < 7) {
    totalPrice = totalPrice * 1.4;
  } else if (daysLeft <= 30) {
    totalPrice = totalPrice * 1.15;
  } else {
    totalPrice = totalPrice * 1.1;
  }

  console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

bags(["63.80", "23", "3", "1"]);
