function solve(dayOfTheWeek) {
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (dayOfTheWeek < 1 || dayOfTheWeek > 7) {
    console.log("Invalid day!");
  } else {
    console.log(daysOfTheWeek[dayOfTheWeek - 1]);
  }
}

solve(0);
