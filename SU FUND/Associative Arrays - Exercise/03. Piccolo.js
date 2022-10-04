function solve(input) {
  let carNumbers = [];
  for (let line of input) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      carNumbers.push(carNumber);
    } else {
      let index = carNumbers.indexOf(carNumber);
      carNumbers.splice(index, 1);
      if (carNumbers.length === 0) {
        console.log("Parking Lot is Empty");
      }
    }
  }

  carNumbers = carNumbers.sort();

  for (let number of carNumbers) {
    console.log(number);
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
