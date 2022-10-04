function houseParty(commands) {
  let peopleGoing = [];
  for (i = 0; i < commands.length; i++) {
    let command = commands[i].split(" ");
    let name = command[0];

    if (!command.includes("not")) {
      if (!peopleGoing.includes(name)) {
        peopleGoing.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (peopleGoing.includes(name)) {
        for (let i = 0; i < peopleGoing.length; i++) {
          if (peopleGoing[i] === name) {
            peopleGoing.splice(i, 1);
          }
        }
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  for (i = 0; i < peopleGoing.length; i++) {
    console.log(peopleGoing[i]);
  }
}

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
