function growingWord() {
  let paragraphElement = document.getElementById("exercise").lastElementChild;

  if (!paragraphElement.style.fontSize) {
    paragraphElement.style.fontSize = "2px";
  } else {
    paragraphElement.style.fontSize =
      parseInt(paragraphElement.style.fontSize) * 2 + "px";
  }

  let colorsElement = document.getElementById("colors");

  let firstColor = colorsElement.firstElementChild;
  let currentColor = firstColor.innerHTML.toLowerCase();

  paragraphElement.style.color = currentColor;

  colorsElement.appendChild(firstColor);
}
