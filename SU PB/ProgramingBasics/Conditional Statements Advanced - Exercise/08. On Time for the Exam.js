function onTime(input) {
  let hourExam = Number(input[0]);
  let minuteExam = Number(input[1]);
  let hourArrival = Number(input[2]);
  let minuteArrival = Number(input[3]);

  let totalMinuteExam = hourExam * 60 + minuteExam;
  let totalMinuteArrival = hourArrival * 60 + minuteArrival;
  let differenceInTimeLate = totalMinuteArrival - totalMinuteExam;
  let differenceInTimeLateEarly = totalMinuteExam - totalMinuteArrival;
  //late
  if (totalMinuteArrival > totalMinuteExam) {
    console.log("Late");
    if (differenceInTimeLate <= 59) {
      console.log(`${differenceInTimeLate} minutes after the start`);
    } else {
      console.log(
        `${Math.floor(differenceInTimeLate / 60)}:${(differenceInTimeLate % 60)
          .toString()
          .padStart(2, "0")} hours after the start`
      );
    }
  }
  // on time

  if (totalMinuteArrival === totalMinuteExam) {
    console.log("On time");
  } else if (
    totalMinuteExam > totalMinuteArrival &&
    differenceInTimeLateEarly <= 30
  ) {
    console.log("On time");
    console.log(`${differenceInTimeLateEarly} minutes before the start`);
  }

  // early

  if (totalMinuteExam > totalMinuteArrival && differenceInTimeLateEarly > 30) {
    console.log("early");
    if (differenceInTimeLateEarly <= 59) {
      console.log(`${differenceInTimeLateEarly} minutes before the start`);
    } else {
      console.log(
        `${Math.floor(differenceInTimeLateEarly / 60)}:${(
          differenceInTimeLateEarly % 60
        )
          .toString()
          .padStart(2, "0")} hours before the start`
      );
    }
  }
}

onTime(["16", "2", "15", "00"]);
