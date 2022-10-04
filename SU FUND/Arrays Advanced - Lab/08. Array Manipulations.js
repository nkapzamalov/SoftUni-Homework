function arrayManipulations(arr) {
  let array = arr.shift();
  let arrayToManipulate = array.split(" ");
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let result = arr[i].split(" ");
    for (let x = 0; x < result.length; x++) {
      newArray.push(result[x]);
    }
  }

  for (let i = 0; i < newArray.length; i += 2) {
    if (newArray[i] === "Add") {
      arrayToManipulate.push(newArray[i + 1]);
    } else if (newArray[i] === "Remove") {
      arrayToManipulate = removeNumber(arrayToManipulate, newArray[i + 1]);
    } else if (newArray[i] === "RemoveAt") {
      arrayToManipulate = removeNumberAtIndex(
        arrayToManipulate,
        newArray[i + 1]
      );
    } else if (newArray[i] === "Insert") {
      arrayToManipulate.splice(newArray[i + 2], 0, newArray[i + 1]);
    }
  }

  function removeNumber(arr, number) {
    let finalResult = [];
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) !== Number(number)) {
        let res = arr.slice(i, i + 1);
        finalResult.push(res.toString());
      }
    }
    arr = finalResult;
    return arr;
  }

  function removeNumberAtIndex(arr, number) {
    if (number === 0) {
      arr.shift();
    } else if (arr.length >= number) {
      arr.splice(number, 1);
    }

    return arr;
  }

  console.log(arrayToManipulate.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
