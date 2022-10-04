function solve(input) {
  let result = "";

  for (let char of input.split("")) {
    if (result.length === 0) {
      result += char;
    }
    if (char !== result[result.length - 1]) {
      result += char;
    }
  }

  console.log(result);
}

solve("aaaaabbbbbcdddeeeedssaa");
