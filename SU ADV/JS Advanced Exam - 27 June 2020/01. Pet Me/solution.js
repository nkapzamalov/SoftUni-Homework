function solve() {
  let addBtnElement = document.querySelector("#container  button");
  let inputElements = [...document.querySelectorAll("#container input")];
  let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
  let adoptionElement = document.querySelector("#adoption ul");
  let adoptedElement = document.querySelector("#adopted ul");

  addBtnElement.addEventListener("click", (e) => {
    e.preventDefault();

    if (!inputElements.every((x) => x.value)) {
      return;
    }
    if (isNaN(ageElement.value)) {
      return;
    }

    let newLiElement = document.createElement("li");
    let newPElement = document.createElement("p");
    let newSpanElement = document.createElement("span");
    let contactButtonElement = document.createElement("button");

    newPElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old<strong>${kindElement.value}</strong>`;
    newSpanElement.textContent = `Owner: ${ownerElement.value}`;
    contactButtonElement.textContent = "[Contact with owner]";

    newLiElement.appendChild(newPElement);
    newLiElement.appendChild(newSpanElement);
    newLiElement.appendChild(contactButtonElement);
    adoptionElement.appendChild(newLiElement);

    nameElement.value = "";
    ageElement.value = "";
    kindElement.value = "";
    ownerElement.value = "";

    contactButtonElement.addEventListener("click", onContactBtnClick);
  });

  function onContactBtnClick(e) {
    let parent = e.currentTarget.parentElement;
    e.currentTarget.remove();
    let newDivElement = document.createElement("div");
    let newInputElement = document.createElement("input");
    let takeItButtonElement = document.createElement("button");

    newInputElement.setAttribute("placeholder", "Enter your names");

    takeItButtonElement.textContent = ["Yes! I take it!"];

    newDivElement.appendChild(newInputElement);
    newDivElement.appendChild(takeItButtonElement);
    parent.appendChild(newDivElement);
    takeItButtonElement.addEventListener("click", onTakeItBtnClick);
  }

  function onTakeItBtnClick(e) {
    let parentBtnElement = e.currentTarget.parentElement;
    let movedToAdoptedLiElement = parentBtnElement.parentElement;
    adoptedElement.appendChild(movedToAdoptedLiElement);
    let newOwnerInputElement = movedToAdoptedLiElement.querySelector("input");
    let newOwnerName = newOwnerInputElement.value;
    let newOwnerSpanElement = movedToAdoptedLiElement.querySelector("span");

    newOwnerSpanElement.textContent = `New Owner: ${newOwnerName}`;

    parentBtnElement.remove();

    let checkedBtnElement = document.createElement("button");
    checkedBtnElement.textContent = "Checked";
    movedToAdoptedLiElement.appendChild(checkedBtnElement);

    checkedBtnElement.addEventListener("click", onCheckedBtnClick);
  }

  function onCheckedBtnClick(e) {
    let checkedAdoptedElement = e.currentTarget.parentElement.parentElement;
    checkedAdoptedElement.remove();
  }
}
