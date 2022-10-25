function create(words) {
  let contentElement = document.getElementById("content");

  for (let word of words) {
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");
    pElement.textContent = word;
    divElement.appendChild(pElement);
    contentElement.appendChild(divElement);
    pElement.style.display = "none";
    divElement.addEventListener("click", function (e) {
      pElement.style.display = "block";
    });
  }
}
