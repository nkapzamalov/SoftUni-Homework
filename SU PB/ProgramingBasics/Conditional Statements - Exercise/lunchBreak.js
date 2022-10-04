function lunchBreak(input) {
  let serialName = input[0];
  let serialLenght = Number(input[1]);
  let rest = Number(input[2]);

  let lunchBreak = (1 / 8) * rest;
  let leasureBreak = (1 / 4) * rest;
  let sparetime = rest - lunchBreak - leasureBreak;

  if (sparetime >= serialLenght) {
    console.log(
      `You have enough time to watch ${serialName} and left with ${Math.ceil(
        sparetime - serialLenght
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${serialName}, you need ${Math.ceil(
        serialLenght - sparetime
      )} more minutes.`
    );
  }
}

lunchBreak(["Teen Wolf", "48", "60"]);
