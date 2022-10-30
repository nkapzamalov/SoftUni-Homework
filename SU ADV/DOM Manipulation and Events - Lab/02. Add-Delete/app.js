function addItem() {
  let inputElement = document.getElementById("newText");
  let text = inputElement.value;
  let itemsElement = document.getElementById("items");
  let newLiElement = document.createElement("li");
  newLiElement.textContent = text;
  itemsElement.appendChild(newLiElement);
  inputElement.value = "";

  let deleteElement = document.createElement("span");
  deleteElement.textContent = "    [Delete]";
  deleteElement.style.color = "red";
  deleteElement.style.cursor = "pointer";
  newLiElement.appendChild(deleteElement);

  deleteElement.addEventListener("click", function (e) {
    newLiElement.remove(e.currentTarget);
  });
}
