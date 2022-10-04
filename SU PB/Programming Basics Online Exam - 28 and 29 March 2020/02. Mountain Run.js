function run(input) {
  let record = Number(input[0]);
  let distance = Number(input[1]);
  let timeFor1meter = Number(input[2]);

  let slowing = Math.floor(distance / 50) * 30;

  let personalRecord = timeFor1meter * distance + slowing;

  if (personalRecord < record) {
    console.log(`Yes! The new record is ${personalRecord.toFixed(2)} seconds.`);
  } else {
    console.log(
      `No! He was ${(personalRecord - record).toFixed(2)} seconds slower.`
    );
  }
}

run(["5554.36", "1340", "3.23"]);
