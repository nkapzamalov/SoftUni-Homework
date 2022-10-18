function addItem() {
  let newElementText = document.getElementById("newItemText");
  let ulElement = document.getElementById("items");
  let newLiElement = document.createElement("li");

  newLiElement.innerText = `${newElementText.value}`;

  let newSpanElement = document.createElement("span");
  newSpanElement.innerText = " [Delete]";
  newLiElement.appendChild(newSpanElement);
  newSpanElement.addEventListener("click", function (e) {
    let parentElement = e.target.parentElement;
    parentElement.remove();
  });
  ulElement.appendChild(newLiElement);
  newElementText.value = "";
}
