function convertToJson(firstName, lastName, hairColor) {
  let personInfo = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(personInfo));
}

convertToJson("George", "Jones", "Brown");
