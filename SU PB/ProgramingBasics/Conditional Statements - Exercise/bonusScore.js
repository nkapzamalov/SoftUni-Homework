function bonusScore(input) {
  let points = Number(input[0]);
  let bonus = 0;

  if (points <= 100) {
    bonus = 5;
  } else if (points > 100 && points <= 1000) {
    bonus = 0.2 * points;
  } else {
    bonus = 0.1 * points;
  }

  if (points % 2 === 0) {
    bonus = 1 + bonus;
  }
  if (points % 10 === 5) {
    bonus = 2 + bonus;
  }
  let totalPoints = points + bonus;

  console.log(bonus);
  console.log(totalPoints);
}

bonusScore(["20"]);
