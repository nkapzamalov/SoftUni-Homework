function triangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let buff = "";
    for (let x = 1; x <= i; x++) {
      buff += `${i} `;
    }
    console.log(buff);
  }
}

triangleNumbers(5);
