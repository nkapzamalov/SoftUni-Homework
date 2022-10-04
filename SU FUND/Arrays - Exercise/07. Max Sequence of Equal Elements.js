function maxSeqOfEqualElements(arr) {
  let bestSeq = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    let currentBestSeq = [];
    currentBestSeq.push(currentNumber);
    for (let x = i + 1; x < arr.length; x++) {
      let nextBestNumber = arr[x];

      if (currentNumber === nextBestNumber) {
        currentBestSeq.push(nextBestNumber);
        if (bestSeq.length < currentBestSeq.length) {
          bestSeq = currentBestSeq;
        }
      } else {
        break;
      }
    }
  }
  let result = "";
  for (let number of bestSeq) {
    result += `${number} `;
  }
  console.log(result);
}

maxSeqOfEqualElements([4, 4, 4, 4]);
