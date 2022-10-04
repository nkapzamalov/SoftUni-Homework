function price(a, b) {
  let result = a * b;
  console.log(result.toFixed(2));
}

function totalOrder(product, orderCount) {
  switch (product) {
    case "coffee":
      price(1.5, orderCount);
      break;
    case "water":
      price(1.0, orderCount);
      break;
    case "coke":
      price(1.4, orderCount);
      break;
    case "snacks":
      price(2, orderCount);
      break;
  }
}

totalOrder("coffee", 2);
