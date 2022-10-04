function distrinctArray(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  console.log(result.join(" "));
}

distrinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
