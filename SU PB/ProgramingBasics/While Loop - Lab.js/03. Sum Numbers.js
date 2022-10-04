function sumNumbers(input) {
  let index = 0;
  let number = Number(input[index]);
  index++;

  let totalAdd = 0;

  while (totalAdd < number) {
    let addNumber = Number(input[index]);
    index++;
    totalAdd += addNumber;
  }
  console.log(totalAdd);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
