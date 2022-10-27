function solve(input) {
  let products = {};
  input.forEach((row) => {
    let [townName, productName, productPriceText] = row.split(" | ");
    let price = Number(productPriceText);

    if (!products[productName] || products[productName].price > price)
      products[productName] = {
        name: townName,
        price: price,
      };
  });

  Object.keys(products).forEach((product) => {
    console.log(
      `${product} -> ${products[product].price} (${products[product].name})`
    );
  });
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
