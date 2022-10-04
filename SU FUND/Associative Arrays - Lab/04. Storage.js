function solve(input) {
  let store = {};

  for (let line of input) {
    let [item, quantity] = line.split(" ");
    quantity = Number(quantity);

    if (store.hasOwnProperty(item)) {
      let oldQuantity = store[item];

      store[item] = oldQuantity + quantity;
    } else {
      store[item] = quantity;
    }
  }
  for (let item in store) {
    console.log(`${item} -> ${store[item]}`);
  }
}

solve(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
