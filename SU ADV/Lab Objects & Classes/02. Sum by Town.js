function solve(input) {
  let cities = {};
  for (let i = 0; i <= input.length; i += 2) {
    if (i >= input.length) {
      break;
    }
    let town = input[i];
    let income = input[i + 1];

    if (cities[town]) {
      cities[town] += Number(income);
    } else {
      cities[town] = Number(income);
    }
  }
  let result = JSON.stringify(cities);
  console.log(result);
}
