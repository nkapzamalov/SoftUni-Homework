function repeatString(string, repeatCount) {
  let newString = "";

  for (i = 0; i < repeatCount; i++) {
    newString += `${string}`;
  }

  return newString;
}
let result = repeatString("abc", 3);
console.log(result);
