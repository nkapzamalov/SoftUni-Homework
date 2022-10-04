function amazingNumber(num) {
  let numToString = num.toString();
  let sum = 0;
  let isAmazing = true;
  for (i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);
  }

  if (sum === 9) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

amazingNumber(999);
