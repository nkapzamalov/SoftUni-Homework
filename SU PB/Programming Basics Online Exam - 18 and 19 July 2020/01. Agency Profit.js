function agency(input) {
  let company = input[0];
  let adultTicketCount = Number(input[1]);
  let childrenTicketCount = Number(input[2]);
  let netAdultTicketPrice = Number(input[3]);
  let servicePrice = Number(input[4]);

  let netChildrenTicketPrice = netAdultTicketPrice * 0.3;
  netAdultTicketPrice = netAdultTicketPrice + servicePrice;
  netChildrenTicketPrice = netChildrenTicketPrice + servicePrice;

  let totalTicketPrice =
    netAdultTicketPrice * adultTicketCount +
    netChildrenTicketPrice * childrenTicketCount;

  let profit = totalTicketPrice * 0.2;

  console.log(
    `The profit of your agency from ${company} tickets is ${profit.toFixed(
      2
    )} lv.`
  );
}

agency(["WizzAir", "15", "5", "120", "40"]);
