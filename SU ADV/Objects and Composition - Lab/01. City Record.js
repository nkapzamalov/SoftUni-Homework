function solve(name, population, treasury) {
  let result = {
    name: name,
    population: Number(population),
    treasury: Number(treasury),
    taxRate: 10,
  };

  return (collectTaxes = () => Math.round((treasury += population * taxRate)));
  return (applyGrowth = (p) =>
    Math.round((population += (population * p) / 100)));
  return (applyRecession = (p) =>
    Math.round((treasury -= (treasury * p) / 100)));
}

const city = solve("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
