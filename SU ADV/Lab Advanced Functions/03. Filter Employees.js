function solve(data, criteria) {
  let personsInfo = JSON.parse(data);

  let [keyCriteria, valueCriteria] = criteria.split("-");
  let counter = 0;

  personsInfo.forEach((person) => {
    if (person[keyCriteria] === valueCriteria || keyCriteria === "all") {
      console.log(
        `${counter}. ${person.first_name} ${person.last_name} - ${person.email}`
      );
      counter++;
    }
  });
}

solve(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  "all"
);
