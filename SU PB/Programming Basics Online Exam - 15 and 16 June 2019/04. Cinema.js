function cinema(input) {
  let index = 0;
  let cinemaCapacity = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let takenSeats = 0;
  let totalTicketPrice = 0;

  while (command !== "Movie time!") {
    let peopleComingToTheMovie = Number(command);
    takenSeats += peopleComingToTheMovie;
    let ticketPrice = 0;
    if (peopleComingToTheMovie % 3 === 0) {
      ticketPrice = peopleComingToTheMovie * 5 - 5;
    } else {
      ticketPrice = peopleComingToTheMovie * 5;
    }
    totalTicketPrice += ticketPrice;
    if (cinemaCapacity < takenSeats) {
      console.log(`The cinema is full.`);
      console.log(`Cinema income - ${totalTicketPrice} lv.`);
      break;
    }
    if (cinemaCapacity === takenSeats) {
      console.log(
        `There are ${cinemaCapacity - takenSeats} seats left in the cinema.`
      );
      console.log(`Cinema income - ${totalTicketPrice} lv.`);
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "Movie time!") {
    console.log(
      `There are ${cinemaCapacity - takenSeats} seats left in the cinema.`
    );
    console.log(`Cinema income - ${totalTicketPrice} lv.`);
  }
}

cinema(["50", "15", "10", "10", "15", "5"]);
