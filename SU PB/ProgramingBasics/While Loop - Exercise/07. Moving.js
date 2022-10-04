function moving(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);

  let totalSpace = length * width * height;
  let loadSpace = 0;

  let index = 3;

  let command = input[index];
  index++;

  while (command !== "Done") {
    let load = Number(command);
    loadSpace += load;

    if (loadSpace > totalSpace) {
      console.log(
        `No more free space! You need ${
          loadSpace - totalSpace
        } Cubic meters more.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Done") {
    console.log(`${totalSpace - loadSpace} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
