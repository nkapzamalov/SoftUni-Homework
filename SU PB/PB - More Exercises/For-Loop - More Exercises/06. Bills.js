function bills(input) {
  let month = Number(input[0]);

  let elseBill = 0;
  let totalWaterBill = 20 * month;
  let totalElectrisityBill = 0;
  let totalInternetBill = 15 * month;

  for (i = 1; i <= month; i++) {
    let electrisityBill = Number(input[i]);
    totalElectrisityBill += electrisityBill;
    elseBill += (15 + 20 + electrisityBill) * 1.2;
  }

  let totalBill =
    elseBill + totalElectrisityBill + totalWaterBill + totalInternetBill;
  let avBill = totalBill / month;

  console.log(`Electricity: ${totalElectrisityBill.toFixed(2)} lv`);
  console.log(`Water: ${totalWaterBill.toFixed(2)} lv`);
  console.log(`Internet: ${totalInternetBill.toFixed(2)} lv`);
  console.log(`Other: ${elseBill.toFixed(2)} lv`);
  console.log(`Average: ${avBill.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
