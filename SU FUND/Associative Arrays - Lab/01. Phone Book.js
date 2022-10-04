function solve(input) {
  let personInformation = {};

  for (let line of input) {
    let [name, phonNumber] = line.split(" ");

    personInformation[name] = phonNumber;
  }

  let personInformationEntries = Object.entries(personInformation);

  for (let kvp of personInformationEntries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
