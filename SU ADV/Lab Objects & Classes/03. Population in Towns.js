function solve(input) {
  let cityInfo = input.map((row) => row.split(" <-> "));
  let cities = {};

  cityInfo.forEach((row) => {
    let city = row[0];
    let population = Number(row[1]);

    if (cities[city]) {
      cities[city] += population;
    } else {
      cities[city] = population;
    }
  });

  Object.keys(cities).forEach((key) => console.log(`${key} : ${cities[key]}`));
}

solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
