function sleepyTomCat(input) {
  let freeDays = Number(input[0]);
  let totalCatPlayTime = 30000;
  let hours = 0;
  let minutes = 0;

  let freeDayPlayTime = freeDays * 127;
  let workDayPlayTime = (365 - freeDays) * 63;

  let totalPossiblePlayTime = freeDayPlayTime + workDayPlayTime;

  if (totalCatPlayTime >= totalPossiblePlayTime) {
    let spareTime = totalCatPlayTime - totalPossiblePlayTime;
    minutes = spareTime % 60;
    hours = Math.floor(spareTime / 60);
    console.log("Tom sleeps well");
    console.log(`${hours} hours and ${minutes} minutes less for play`);
  } else {
    let overtime = totalPossiblePlayTime - totalCatPlayTime;
    minutes = overtime % 60;
    hours = Math.floor(overtime / 60);
    console.log("Tom will run away");
    console.log(`${hours} hours and ${minutes} minutes more for play`);
  }
}

sleepyTomCat([20]);
