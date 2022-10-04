function depositcalculator(input) {
  let depositmount = Number(input[0]);
  let depositterm = Number(input[1]);
  let annualinterestrate = Number(input[2]);
  let interestcalculation = depositmount * (annualinterestrate / 100);
  let monthinterestcalculation = interestcalculation / 12;
  let totalamount = depositmount + depositterm * monthinterestcalculation;

  console.log(totalamount);
}

depositcalculator(["200 ", "3 ", "5.7 "]);
