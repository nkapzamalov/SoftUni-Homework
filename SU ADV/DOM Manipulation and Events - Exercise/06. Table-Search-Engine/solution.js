function solve() {
  let inputElement = document.getElementById("searchField");
  let btnElement = document.getElementById("searchBtn");

  btnElement.addEventListener("click", function (e) {
    let trElements = document.querySelectorAll("tbody > tr");
    let trArray = Array.from(trElements);
    trArray.forEach((tr) => {
      if (tr.textContent.includes(inputElement.value)) {
        tr.classList.add("select");
      } else {
        tr.classList.remove("select");
      }
    });
    inputElement.value = "";
  });
}
