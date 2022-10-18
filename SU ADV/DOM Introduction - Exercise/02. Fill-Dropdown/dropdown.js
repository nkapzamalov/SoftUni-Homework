function addItem() {
  let textElement = document.getElementById("newItemText");
  let valueElement = document.getElementById("newItemValue");
  let selectElement = document.getElementById("menu");

  let text = textElement.value;
  let value = valueElement.value;

  let optionElement = document.createElement("option");
  optionElement.innerText = text;
  optionElement.value = value;

  selectElement.appendChild(optionElement);
}
