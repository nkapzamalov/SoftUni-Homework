function printN(arr) {
  let result = "";
  let nStep = Number(arr[arr.length - 1]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % nStep === 0) {
      result += `${arr[i]} `;
    }
  }
  console.log(result);
}

printN(["1", "2", "3", "4", "5", "6"]);
