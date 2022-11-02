function solve(name, age, weight, height) {
  let bmi = Math.round(Number(weight) / (Number(height) / 100) ** 2);
  let checkBmiResult = checkBmi(bmi);

  function checkBmi(bmi) {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi < 25) {
      return "normal";
    } else if (bmi < 30) {
      return "overweight";
    } else {
      return "obese";
    }
  }

  let person = {
    name: name,
    personalInfo: {
      age,
      weight,
      height,
    },
    BMI: bmi,
    status: checkBmiResult,
  };

  if (checkBmiResult === "obese") {
    person.recommendation = "admission required";
  }

  return person;
}

solve("Honey Boo Boo", 29, 78, 179);
