function reportSystem(input) {
  let index = 0;
  let charityMoney = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let counter = 0;
  let totalCardPayment = 0;
  let totalCashPayment = 0;
  let totalCardTransactions = 0;
  let totalCashTransactions = 0;
  let totalMoneyRaised = 0;

  while (command != "End") {
    let moneyGiven = Number(command);
    counter += 1;
    if (counter % 2 === 0) {
      if (moneyGiven < 10) {
        console.log(`Error in transaction!`);
      } else {
        totalCardPayment += moneyGiven;
        totalCardTransactions += 1;
        totalMoneyRaised += moneyGiven;
        console.log(`Product sold!`);
      }
    } else {
      if (moneyGiven > 100) {
        console.log(`Error in transaction!`);
      } else {
        totalCashPayment += moneyGiven;
        totalCashTransactions += 1;
        console.log(`Product sold!`);
        totalMoneyRaised += moneyGiven;
      }
    }
    if (totalMoneyRaised >= charityMoney) {
      console.log(
        `Average CS: ${(totalCashPayment / totalCashTransactions).toFixed(2)}`
      );
      console.log(
        `Average CC: ${(totalCardPayment / totalCardTransactions).toFixed(2)}`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log(`Failed to collect required money for charity.`);
  }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
