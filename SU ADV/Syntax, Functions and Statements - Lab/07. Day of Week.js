function solve(dayOfWeek) {
  let result = 0;
  let isValid = true;
  if (dayOfWeek === "Monday") {
    result = 1;
  } else if (dayOfWeek === "Tuesday") {
    result = 2;
  } else if (dayOfWeek === "Wednesday") {
    result = 3;
  } else if (dayOfWeek === "Thursday") {
    result = 4;
  } else if (dayOfWeek === "Friday") {
    result = 5;
  } else if (dayOfWeek === "Saturday") {
    result = 6;
  } else if (dayOfWeek === "Sunday") {
    result = 7;
  } else {
    isValid = false;
  }

  if (isValid) {
    console.log(result);
  } else {
    console.log("error");
  }
}

solve("Monday");
