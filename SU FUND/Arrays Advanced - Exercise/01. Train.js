function trainPassengers(array) {
  let wagons = array
    .slice()[0]
    .split(" ")
    .map((n) => Number(n));

  let maxCapacity = Number(array[1]);

  let commands = array.slice(2);

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");

    if (command.length === 2) {
      if (command[0] === "Add") {
        wagons.push(Number(command[1]));
      }
    } else {
      for (let i = 0; i < wagons.length; i++) {
        if (Number(command[0]) + wagons[i] <= maxCapacity) {
          wagons[i] += Number(command[0]);
          break;
        }
      }
    }
  }

  console.log(wagons.join(" "));
}

trainPassengers(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
