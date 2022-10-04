function solve(input) {
  let stringLength = input.length;

  let firsHalf = input.substring(0, stringLength / 2);
  let secondHalf = input.substring(stringLength / 2);

  console.log(firsHalf.split("").reverse().join(""));
  console.log(secondHalf.split("").reverse().join(""));
}

solve("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
