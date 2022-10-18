function toggle() {
  let buttonElement = document.getElementsByClassName("button");
  let button = buttonElement[0];

  let textToShowElement = document.getElementById("extra");

  if (button.innerText === "MORE") {
    textToShowElement.style.display = "block";

    button.innerText = "LESS";
  } else {
    textToShowElement.style.display = "none";
    button.innerText = "MORE";
  }
}
