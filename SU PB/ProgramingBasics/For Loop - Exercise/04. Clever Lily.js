function lilly(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let moneySum = 0;
  let toySum = 0;
  let totalMoneySum = 0;
  let totalPrice = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      moneySum += 10;
      totalMoneySum += moneySum - 1;
    } else {
      toySum += toyPrice;
    }
  }
  totalPrice = totalMoneySum + toySum;

  if (totalPrice >= washingMachinePrice) {
    console.log(`Yes! ${(totalPrice - washingMachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachinePrice - totalPrice).toFixed(2)}`);
  }
}

lilly(["10", "170.00", "6"]);
