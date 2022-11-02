function solve() {
  let firstElement;
  let secondElement;
  let resultElement;

  return {
    init: function (selector1, selector2, resultSelector) {
      firstElement = document.querySelector(selector1);
      secondElement = document.querySelector(selector2);
      resultElement = document.querySelector(resultSelector);
    },
    add: () => {
      resultElement.value =
        Number(firstElement.value) + Number(secondElement.value);
    },
    subtract: () => {
      resultElement.value =
        Number(firstElement.value) - Number(secondElement.value);
    },
    multiply: () => {
      resultElement.value =
        Number(firstElement.value) * Number(secondElement.value);
    },
    divide: () => {
      resultElement.value =
        Number(firstElement.value) / Number(secondElement.value);
    },
  };
}

let sum = solve();
sum.init("#num1", "#num2", "#result");

let sumBtnElement = document.getElementById("sumButton");
let subtractButnElement = document.getElementById("subtractButton");
let multiplyBtnElement = document.getElementById("multBtn");
let divideBtnElement = document.getElementById("divBtn");

sumBtnElement.addEventListener("click", () => {
  sum.add();
});
subtractButnElement.addEventListener("click", () => {
  sum.subtract();
});
multiplyBtnElement.addEventListener("click", () => {
  sum.multiply();
});
divideBtnElement.addEventListener("click", () => {
  sum.divide();
});
