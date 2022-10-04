function storeProvision(stock, ordered) {
  let storeInfo = {};

  for (i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let quantity = stock[i + 1];

    storeInfo[productName] = Number(quantity);
  }
  for (i = 0; i < ordered.length; i += 2) {
    let productName = ordered[i];
    let quantity = ordered[i + 1];

    if (storeInfo[productName] === undefined) {
      storeInfo[productName] = 0;
    }
    storeInfo[productName] += Number(quantity);
  }

  for (let product in storeInfo) {
    console.log(`${product} -> ${storeInfo[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
