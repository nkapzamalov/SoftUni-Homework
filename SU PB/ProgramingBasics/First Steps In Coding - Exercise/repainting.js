function repainting(input) {
  let plasticcount = Number(input[0]);
  let paintcount = Number(input[1]);
  let paintthinnercount = Number(input[2]);
  let workinghours = Number(input[3]);

  let plasticprice = (plasticcount + 2) * 1.5;
  let paintprice = (paintcount + paintcount * 0.1) * 14.5;
  let thinner = paintthinnercount * 5;
  let plasticbags = 0.4;
  let totalpriceformaterials =
    plasticprice + paintprice + thinner + plasticbags;
  let workprice = totalpriceformaterials * 0.3 * workinghours;
  let totalprice = workprice + totalpriceformaterials;
  console.log(totalprice);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
