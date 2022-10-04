function fishland(input) {
  let skumriaPerKgPrice = Number(input[0]);
  let cacaPerKgPrice = Number(input[1]);
  let palamudKg = Number(input[2]);
  let safridPKg = Number(input[3]);
  let midiKg = Number(input[4]);

  let palamudPerKgPrice = 0.6 * skumriaPerKgPrice + skumriaPerKgPrice;
  let palamudPrice = palamudPerKgPrice * palamudKg;

  let safridPerKgPrice = 0.8 * cacaPerKgPrice + cacaPerKgPrice;
  let safridPrice = safridPerKgPrice * safridPKg;

  let midiPrice = 7.5 * midiKg;

  let totalPrice = (palamudPrice + safridPrice + midiPrice).toFixed(2);

  console.log(totalPrice);
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
