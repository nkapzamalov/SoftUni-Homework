function change(input) {
  let bitcoinCount = Number(input[0]);
  let chineseCount = Number(input[1]);
  let commision = Number(input[2]);

  commision = commision / 100;

  let lvBtc = bitcoinCount * 1168;
  let usd = chineseCount * 0.15;
  let lvUsd = usd * 1.76;

  let totalLv = ((lvBtc + lvUsd) * commision) / 1.95;

  console.log(((lvBtc + lvUsd) / 1.95 - totalLv).toFixed(2));
}

change(["20", "5678", "2.4"]);
