function solve(input) {
  let adressInformation = {};

  for (let line of input) {
    let [name, adress] = line.split(":");
    adressInformation[name] = adress;
  }

  let adressInformationEntries = Object.entries(adressInformation).sort(
    (a, b) => a[0].localeCompare(b[0])
  );

  for (let kvp of adressInformationEntries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
