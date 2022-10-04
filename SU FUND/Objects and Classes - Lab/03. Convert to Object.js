function convertToObject(input) {
  let objectInfo = JSON.parse(input);

  for (let key in objectInfo) {
    console.log(`${key}: ${objectInfo[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
