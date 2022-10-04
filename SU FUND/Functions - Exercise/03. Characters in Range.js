function charInRange(charStart, charEnd) {
  let startCharCode = charStart.charCodeAt(0);
  let endCharCode = charEnd.charCodeAt(0);
  let minStarCharCode = Math.min(startCharCode, endCharCode);
  let maxStarCharCode = Math.max(startCharCode, endCharCode);
  let result = "";
  for (i = minStarCharCode + 1; i < maxStarCharCode; i++) {
    let charCodeToChar = String.fromCharCode(i);
    result += `${charCodeToChar} `;
  }

  console.log(result);
}

charInRange("C", "#");
