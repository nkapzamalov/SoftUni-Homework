function mergeArrays(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (i === x) {
        if (i % 2 === 0) {
          newArr[i] = Number(arr1[i]) + Number(arr2[x]);
          break;
        } else {
          newArr[i] = arr1[i] + arr2[i];
          break;
        }
      }
    }
  }
  let finalResult = "";
  for (i = 0; i < newArr.length; i++) {
    if (i === newArr.length - 1) {
      finalResult += newArr[i];
    } else {
      finalResult += `${newArr[i]} - `;
    }
  }
  console.log(finalResult);
}

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
