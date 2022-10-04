function celToFah(input) {
  let cel = Number(input[0]);
  let fah = (cel * 1.8 + 32).toFixed(2);
  console.log(fah);
}

celToFah(["25"]);
