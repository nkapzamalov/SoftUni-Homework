function magicSum(arr, magicNum) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === magicNum) {
        result = `${arr[i]} ${arr[x]} `;
        console.log(result);
        break;
      }
    }
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
