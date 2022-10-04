function bombNumbers(arr, bombInfo) {
  let bomb = bombInfo[0];
  let range = bombInfo[1];
  let bombLocation = arr.indexOf(bomb);
  while (bombLocation > -1) {
    arr.splice(Math.max(bombLocation - range, 0), range);
    bombLocation = arr.indexOf(bomb);
    arr.splice(bombLocation, range + 1);
    bombLocation = arr.indexOf(bomb);
  }
  let sum = 0;
  for (num of arr) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
