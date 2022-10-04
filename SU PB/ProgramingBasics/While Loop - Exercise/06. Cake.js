function cake(input) {
  let hight = Number(input[0]);
  let width = Number(input[1]);
  let index = 2;
  let command = input[index];
  index++;
  let totalPieces = hight * width;
  let cakePiecesSurved = 0;

  while (command !== "STOP") {
    let cakePieces = Number(command);
    cakePiecesSurved += cakePieces;
    if (cakePiecesSurved > totalPieces) {
      console.log(
        `No more cake left! You need ${
          cakePiecesSurved - totalPieces
        } pieces more.`
      );
      break;
    }
    command = input[index];
    index++;
  }

  if (command === "STOP") {
    console.log(`${totalPieces - cakePiecesSurved} pieces are left.`);
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
