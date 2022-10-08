function solve(number) {
  for (let i = 0; i < number; i++) {
    let result = "";
    for (let x = 0; x < number; x++) {
      result += `${"*"} `;
    }
    console.log(result);
  }
}

solve(7);
