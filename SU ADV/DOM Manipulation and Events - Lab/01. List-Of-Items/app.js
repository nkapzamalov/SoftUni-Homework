function addItem() {
  let inputElement = document.getElementById("newItemText");
  let text = inputElement.value;
  let itemsElement = document.getElementById("items");

  let newLiElement = document.createElement("li");

  newLiElement.textContent = text;

  itemsElement.appendChild(newLiElement);
  inputElement.value = "";
}
