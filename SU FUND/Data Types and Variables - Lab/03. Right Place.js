function rightPlace(firstString, char, secondString) {
  let rightString = "";

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === "_") {
      rightString += char;
    } else {
      rightString += firstString[i];
    }
  }

  if (rightString === secondString) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "i", "String");
