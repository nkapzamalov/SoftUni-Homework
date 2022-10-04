function listOfProducts(arr) {
  let rightOrder = arr.sort((a, b) => a.localeCompare(b));

  for (i = 0; i < rightOrder.length; i++) {
    console.log(`${i + 1}.${rightOrder[i]}`);
  }
}

listOfProducts(["Watermelon", "Banana", "Apples"]);
