function vacationBooksList(input) {
  let pagesnumber = Number(input[0]);
  let pagesredfor1hour = Number(input[1]);
  let datecount = Number(input[2]);
  let totalamountforreading = pagesnumber / pagesredfor1hour;
  let hoursforreadingthebook = totalamountforreading / datecount;
  console.log(hoursforreadingthebook);
}

vacationBooksList(["432 ", "15 ", "4 "]);
