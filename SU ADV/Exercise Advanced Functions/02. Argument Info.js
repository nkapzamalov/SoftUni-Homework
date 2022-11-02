function solve() {
  let argumentsInfo = [];
  let argCount = {};

  [...arguments].forEach((arg) => {
    argumentsInfo.push({ [typeof arg]: arg });
  });

  argumentsInfo.forEach((arg) => {
    Object.keys(arg).forEach((key) => {
      if (argCount[key]) {
        argCount[key]++;
      } else {
        argCount[key] = 1;
      }
      console.log(`${key}: ${arg[key]}`);
    });
  });

  Object.entries(argCount)
    .sort((a, b) => b[1] - a[1])
    .forEach((key) => {
      console.log(`${key[0]} = ${key[1]}`);
    });
}

solve("Peter", 29, 75, 182);
