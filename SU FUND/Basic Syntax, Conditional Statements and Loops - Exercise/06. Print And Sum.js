function printAndSum(startNumber, endNumber) {
  let sum = 0;
  let buff = "";
  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
    buff += `${i} `;
  }

  console.log(buff);
  console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);
