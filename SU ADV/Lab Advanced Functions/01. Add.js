function solution(number) {
  let num1 = number;

  return function (secondNum) {
    return num1 + secondNum;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
