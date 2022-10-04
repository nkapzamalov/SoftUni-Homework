function vacation(input) {
  let index = 0;
  let moneyNeededForVacation = Number(input[index]);
  index++;
  let startingMoney = Number(input[index]);
  index++;
  let moneyAction = input[index];
  index++;
  let moneyTransaction = Number(input[index]);
  index++;

  let totalSavedMoney = startingMoney;
  let countSpend = 0;
  let countDays = 0;

  while (totalSavedMoney < moneyNeededForVacation) {
    if (moneyAction === "save") {
      totalSavedMoney += moneyTransaction;
      countSpend = 0;
    } else {
      totalSavedMoney -= moneyTransaction;
      countSpend += 1;
      if (totalSavedMoney < 0) {
        totalSavedMoney = 0;
      }
    }
    countDays += 1;
    if (countSpend === 5) {
      console.log(`You can't save the money.`);
      console.log(`${countDays}`);
      break;
    }
    moneyAction = input[index];
    index++;
    moneyTransaction = Number(input[index]);
    index++;
  }
  if (totalSavedMoney >= moneyNeededForVacation) {
    console.log(`You saved the money for ${countDays} days.`);
  }
}

vacation([
  "110",

  "60",

  "spend",

  "10",

  "spend",

  "10",

  "spend",

  "10",

  "spend",

  "10",
  "spend",
  "10",
]);
