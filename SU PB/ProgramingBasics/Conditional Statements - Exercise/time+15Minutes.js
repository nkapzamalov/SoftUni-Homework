function timeMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let totalMinutes = hours * 60 + minutes + 15;
  let totalHour = Math.floor((totalMinutes / 60) % 24);
  let totalMinute = totalMinutes % 60;

  if (totalMinute < 10) {
    console.log(`${totalHour}:0${totalMinute}`);
  } else {
    console.log(`${totalHour}:${totalMinute}`);
  }
}

timeMinutes(["1", "46"]);
