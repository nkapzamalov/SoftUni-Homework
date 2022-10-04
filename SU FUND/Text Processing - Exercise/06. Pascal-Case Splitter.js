function solve(input) {
  let result = "";
  for (let char of input.split("")) {
    if (char == char.toUpperCase()) {
      if (result.length === 0) {
        result += char;
      } else {
        result += `, ${char}`;
      }
    } else {
      result += char;
    }
  }
  console.log(result);
}

solve("ThisIsSoAnnoyingToDo");
