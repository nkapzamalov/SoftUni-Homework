function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegiMenu = Number(input[2]);

  let priceChickenMenu = chickenMenu * 10.35;
  let priceFishMenu = fishMenu * 12.4;
  let priceVegiMenu = vegiMenu * 8.15;
  let orderPrice = priceChickenMenu + priceFishMenu + priceVegiMenu;
  let desertPrice = orderPrice * 0.2;
  let deliveryPrice = 2.5;
  let totalOrderPrice = orderPrice + desertPrice + deliveryPrice;
  console.log(totalOrderPrice);
}

foodDelivery(["2 ", "4 ", "3 "]);
