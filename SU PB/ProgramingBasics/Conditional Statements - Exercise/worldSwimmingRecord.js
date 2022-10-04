function worldRecord(input) {
  let recordSeconds = Number(input[0]);
  let distanceMeters = Number(input[1]);
  let timeInSecondsForOneMeter = Number(input[2]);

  let personalTimeWithoutSlowing = distanceMeters * timeInSecondsForOneMeter;
  let slowing = Math.floor(distanceMeters / 15) * 12.5;
  let personalTime = personalTimeWithoutSlowing + slowing;

  if (personalTime < recordSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${personalTime.toFixed(
        2
      )} seconds.`
    );
  } else
    console.log(
      `No, he failed! He was ${(personalTime - recordSeconds).toFixed(
        2
      )} seconds slower.`
    );
}

worldRecord(["55555.76", "3017", "5.03"]);
