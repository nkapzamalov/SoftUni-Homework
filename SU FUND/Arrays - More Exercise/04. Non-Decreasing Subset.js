function nonDecr(arr) {
  let result = [];
  let counter = 0;
  for (let i = 0 - counter; i < arr.length + counter; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] < arr[x]) {
        result.push(arr[i]);
        break;
      } else {
        arr.splice(x, 1);
        result.push(arr[i]);
        counter += 1;
        break;
      }
    }
  }
  console.log(result);
}

nonDecr([1, 3, 8, 4, 10, 12, 3, 2, 24]);
