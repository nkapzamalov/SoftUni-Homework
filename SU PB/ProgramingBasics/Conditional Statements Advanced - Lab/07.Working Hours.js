function workingHours(input) {
  let hour = Number(input[0]);
  let dayOfWeek = input[1];

  if (dayOfWeek === "Monday") {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else if (dayOfWeek === "Tuesday") {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else if (dayOfWeek === "Wednsday") {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else if (dayOfWeek === "Thursday") {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else if (dayOfWeek === "Friday") {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else if (dayOfWeek === "Saturday") {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else {
    console.log("closed");
  }
}
workingHours(["11", "Sunday"]);
