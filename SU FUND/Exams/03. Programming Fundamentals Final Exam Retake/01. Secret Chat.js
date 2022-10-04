function solve(input) {
  let concealedMessage = input[0];

  let commands = input.slice(1);

  for (let line of commands) {
    if (line === "Reveal") {
      console.log(`You have a new text message: ${concealedMessage}`);
      break;
    } else {
      let command = line.split(":|:")[0];
      if (command === "ChangeAll") {
        let substring = line.split(":|:")[1];
        let replacement = line.split(":|:")[2];
        let index = 0;
        while (index > -1) {
          concealedMessage = concealedMessage.replace(substring, replacement);
          index = concealedMessage.indexOf(substring);
        }
        console.log(concealedMessage);
      } else if (command === "Reverse") {
        let substring = line.split(":|:")[1];
        let index = concealedMessage.indexOf(substring);

        if (index > -1) {
          let lenght = substring.length;
          let cut = concealedMessage
            .substring(index, index + lenght)
            .split("")
            .reverse()
            .join("");

          concealedMessage = concealedMessage.replace(substring, cut);
          console.log(concealedMessage);
        } else {
          console.log("error");
        }
      } else if (command === "InsertSpace") {
        let index = Number(line.split(":|:")[1]);

        let result =
          concealedMessage.slice(0, index) +
          " " +
          concealedMessage.slice(index);
        concealedMessage = result;
        console.log(concealedMessage);
      }
    }
  }
}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
