function arrayRotation(arr, rotations) {
  let newResult = [];
  if (rotations > arr.length) {
    rotations = rotations % arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < rotations; x++) {
      newResult[x] = arr[x];
    }
    break;
  }

  for (i = 0; i < rotations; i++) {
    arr.shift();
  }

  let finalArr = arr.concat(newResult);

  result = "";

  for (let index of finalArr) {
    result += `${index} `;
  }
  console.log(result);
}

arrayRotation([51, 47, 32, 61, 21], 2);
