function solve(fruit, weight, price) {
  let weightKg = weight / 1000;

  console.log(
    `I need ${"$"}${(weightKg * price).toFixed(2)} to buy ${weightKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("apple", 1563, 2.35);
