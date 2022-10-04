function arrayManipulator(arrToManipulate, arrOfCommands) {
  for (let i = 0; i < arrOfCommands.length; i++) {
    let command = arrOfCommands[i].split(" ");
    if (command[0] === "add") {
      arrToManipulate.splice(command[1], 0, Number(command[2]));
    } else if (command[0] === "addMany") {
      for (let x = command.length - 1; x > 1; x--) {
        arrToManipulate.splice(command[1], 0, Number(command[x]));
      }
    } else if (command[0] === "contains") {
      if (arrToManipulate.includes(Number(command[1]))) {
        for (let i = 0; i < arrToManipulate.length; i++) {
          if (arrToManipulate[i] === Number(command[1])) {
            console.log(arrToManipulate.indexOf(arrToManipulate[i]));
          }
        }
      } else {
        console.log(-1);
      }
    } else if (command[0] === "remove") {
      arrToManipulate.splice(command[1], 1);
    } else if (command[0] === "shift") {
      let numberOfRotations = Number(command[1]);
      for (let y = 0; y < numberOfRotations; y++) {
        let elementToMove = arrToManipulate.shift();
        arrToManipulate.push(elementToMove);
      }
    } else if (command[0] === "sumPairs") {
      let result = [];
      let sum = 0;
      for (let z = 0; z < arrToManipulate.length; z += 2) {
        if (arrToManipulate.length < 2) {
          sum = arrToManipulate[z];
          result.push(sum);
          break;
        } else if (arrToManipulate.length < 4) {
          if (z === arrToManipulate.length - 1) {
            sum = arrToManipulate[z];
            result.push(sum);
          } else {
            sum = arrToManipulate[z] + arrToManipulate[z + 1];
            result.push(sum);
          }
        } else {
          if (z === arrToManipulate.length - 1) {
            sum = arrToManipulate[z];
            result.push(sum);
          } else {
            sum = arrToManipulate[z] + arrToManipulate[z + 1];
            result.push(sum);
          }
        }
      }
      arrToManipulate = result;
    } else {
      let result = "";
      for (let i = 0; i < arrToManipulate.length; i++) {
        if (i === 0) {
          result += `[ ${arrToManipulate[i]}, `;
        } else if (i === arrToManipulate.length - 1) {
          result += `${arrToManipulate[i]} ]`;
        } else {
          result += `${arrToManipulate[i]}, `;
        }
      }
      console.log(result);
    }
  }
}

arrayManipulator([1, 1, 1, 1], ["sumPairs"]);
