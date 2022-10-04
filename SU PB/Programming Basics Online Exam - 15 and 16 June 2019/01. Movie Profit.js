function movieProfit(input) {
  let filmName = input[0];
  let days = Number(input[1]);
  let ticketsCount = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let cinemaPercent = Number(input[4]) / 100;

  let totalIncome = ticketPrice * ticketsCount * days;

  console.log(
    `The profit from the movie ${filmName} is ${(
      totalIncome -
      totalIncome * cinemaPercent
    ).toFixed(2)} lv.`
  );
}

movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
