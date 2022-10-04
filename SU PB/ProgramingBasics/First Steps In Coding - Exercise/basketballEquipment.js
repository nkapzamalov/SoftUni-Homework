function basketballEquipment(input) {
  let priceTraining = Number(input[0]);
  let shoes = priceTraining - priceTraining * 0.4;
  let suit = shoes - shoes * 0.2;
  let ball = suit * 0.25;
  let accessories = ball * 0.2;
  let totalcost = priceTraining + shoes + suit + ball + accessories;
  console.log(totalcost);
}
basketballEquipment(["365"]);
