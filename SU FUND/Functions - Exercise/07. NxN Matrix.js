function matrix(number) {
  for (let i = 0; i < number; i++) {
    console.log(repeatNumber(number));
  }

  function repeatNumber(number) {
    let result = "";

    for (i = 0; i < number; i++) {
      result += `${number} `;
    }
    return result;
  }
}

matrix(2);
