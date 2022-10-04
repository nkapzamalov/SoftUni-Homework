function fishTank(input) {
  let l = Number(input[0]);
  let w = Number(input[1]);
  let h = Number(input[2]);
  let percent = Number(input[3]);

  let volume = l * w * h;
  let volumeLiter = volume * 0.001;
  let convertedPercent = percent / 100;
  let litersneeded = volumeLiter * (1 - convertedPercent);
  console.log(litersneeded);
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
