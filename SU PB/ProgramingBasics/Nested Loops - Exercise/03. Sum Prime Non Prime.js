function prime(input) {
  let index = 0;
  let command = input[index];
  index++;
  let primeCount = 0;
  let nonPrimeCount = 0;

  while (command !== "stop") {
    let n = Number(command);
    if (n < 0) {
      console.log("Number is negative.");
      command = input[index];
      index++;
      continue;
    }
    let isPrime = true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeCount += n;
    } else {
      nonPrimeCount += n;
    }

    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${primeCount}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeCount}`);
}

prime(["0", "-9", "0", "stop"]);
