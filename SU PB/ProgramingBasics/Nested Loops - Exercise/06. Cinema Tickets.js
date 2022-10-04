function cinema(input) {
  let index = 0;
  let filmName = input[index];
  index++;

  let studentTickets = 0;
  let standardtTickets = 0;
  let kidTickets = 0;
  while (filmName !== "Finish") {
    let freeSpaces = Number(input[index]);
    index++;
    let ticketType = input[index];
    index++;
    let soldTickets = 0;

    while (ticketType !== "End") {
      soldTickets++;
      if (ticketType === "student") {
        studentTickets++;
      } else if (ticketType === "standard") {
        standardtTickets++;
      } else {
        kidTickets++;
      }

      if (soldTickets === freeSpaces) {
        break;
      }
      ticketType = input[index];
      index++;
    }
    console.log(
      `${filmName} - ${((soldTickets / freeSpaces) * 100).toFixed(2)}% full.`
    );
    filmName = input[index];
    index++;
  }
  let totalTickets = kidTickets + standardtTickets + studentTickets;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`
  );

  console.log(
    `${((standardtTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );

  console.log(
    `${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`
  );
}

cinema([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
