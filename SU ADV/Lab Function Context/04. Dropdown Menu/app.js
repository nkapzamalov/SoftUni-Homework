function solve() {
  let chooseYourStyleBtnElement = document.getElementById("dropdown");
  let dropdownElement = document.getElementById("dropdown-ul");
  let boxElement = document.getElementById("box");
  let liElements = document.querySelectorAll("ul > li");

  chooseYourStyleBtnElement.addEventListener("click", () => {
    if (dropdownElement.style.display !== "block") {
      dropdownElement.style.display = "block";
    } else {
      dropdownElement.style.display = "none";
    }
  });

  liElements.forEach((li) => {
    li.addEventListener("click", () => {
      boxElement.style.backgroundColor = `${li.textContent}`;
    });
  });
}
