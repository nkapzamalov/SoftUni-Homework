function solve() {
  let text = document.getElementById("input").innerText;
  let sentance = text.split(".");

  let output = document.getElementById("output");

  while (sentance.length > 0) {
    let newParagraph = sentance.splice(0, 3).join(".");
    let contentElement = document.createElement("p");
    contentElement.innerText = newParagraph;
    output.appendChild(contentElement);
  }
}
