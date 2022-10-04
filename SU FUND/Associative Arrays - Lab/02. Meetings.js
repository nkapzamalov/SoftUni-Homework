function solve(input) {
  let meetingAppointments = {};
  let daysOfWeekCheck = [];

  for (let line of input) {
    let [dayOfWeek, name] = line.split(" ");
    if (daysOfWeekCheck.includes(dayOfWeek)) {
      console.log(`Conflict on ${dayOfWeek}!`);
    } else {
      meetingAppointments[dayOfWeek] = name;
      console.log(`Scheduled for ${dayOfWeek}`);
    }
    daysOfWeekCheck.push(dayOfWeek);
  }

  let meetingAppointmentsEntries = Object.entries(meetingAppointments);

  for (let kvp of meetingAppointmentsEntries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

solve([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
