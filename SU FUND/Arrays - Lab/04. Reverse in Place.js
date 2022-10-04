function solve(strings) {
  let result = "";

  for (let i = strings.length - 1; i >= 0; i--) {
    result += `${strings[i]} `;
  }

  console.log(result);
}

solve(["a", "b", "c", "d", "e"]);
