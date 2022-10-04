function searchForANumber(arr, arrComands) {
  let result = [];
  let elementsToTake = arrComands[0];
  let elementsToDelete = arrComands[1];
  let elementToLookFor = arrComands[2];

  result = arr.slice(0, elementsToTake);
  result.splice(0, elementsToDelete);
  let counter = searchForDuplicate(result, elementToLookFor);

  function searchForDuplicate(arr, numToSearchFor) {
    let counter = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === numToSearchFor) {
        counter += 1;
      }
    }
    return counter;
  }

  console.log(`Number ${elementToLookFor} occurs ${counter} times.`);
}

searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
