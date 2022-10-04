function sortArr2Criteria(arr) {
  let elementLength = arr.sort(sorting);

  function sorting(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return a.localeCompare(b);
    }
  }

  console.log(elementLength.join("\n"));
}

sortArr2Criteria(["alpha", "beta", "gamma"]);
