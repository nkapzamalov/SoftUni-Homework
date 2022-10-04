function pin(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let n3 = Number(input[2]);

  for (let i = 1; i <= n1; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
    for (let y = 1; y <= n2; y++) {
      isPrime = true;
      for (let x = 0; x <= n2; x++) {
        if (y % x === 0) {
          isPrime = false;
          continue;
        }
      }
      if (isPrime) {
        console.log(y);
      }
    }
  }
}

pin(["3", "5", "5"]);
