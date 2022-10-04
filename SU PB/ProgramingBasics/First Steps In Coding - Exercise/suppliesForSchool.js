function suppliesForSchool(input) {
  let totalpencilpackage = Number(input[0]);
  let totalmarkerpackage = Number(input[1]);
  let totalliterschemikalforcleaning = Number(input[2]);
  let percentdiscount = Number(input[3]);

  let totalpriceforpencil = totalpencilpackage * 5.8;
  let totalpriceformarker = totalmarkerpackage * 7.2;
  let totalpriceforchemical = totalliterschemikalforcleaning * 1.2;
  let totalpriceofeverytjing =
    totalpriceforpencil + totalpriceformarker + totalpriceforchemical;
  let pricewithdicsount =
    totalpriceofeverytjing - totalpriceofeverytjing * (percentdiscount / 100);
  console.log(pricewithdicsount);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
