function arrayModifier(input) {
  let array = input.shift().split(" ");

  let index = 0;
  let commands = input[index];
  index++;

  while (commands !== "end") {
    let command = commands.split(" ");
    let firstIndex = Number(command[1]);
    let secondIndex = Number(command[2]);
    let numberOne = Number(array[firstIndex]);
    let numberTwo = Number(array[secondIndex]);

    if (command[0] === "swap") {
      [array[firstIndex], array[secondIndex]] = [
        array[secondIndex],
        array[firstIndex],
      ];
    } else if (command[0] === "multiply") {
      let result = numberOne * numberTwo;
      array.splice(firstIndex, 1, result);
    } else if (command[0] === "decrease") {
      let result = array.map((x) => x - 1);
      array = result;
    }
    commands = input[index];
    index++;
  }
  console.log(array.join(", "));
}

arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
