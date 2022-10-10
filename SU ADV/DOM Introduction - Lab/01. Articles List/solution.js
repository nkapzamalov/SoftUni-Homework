function createArticle() {
  let titleElement = document.getElementById("createTitle");
  let contentInputElement = document.getElementById("createContent");

  let headingElement = document.createElement("h3");
  headingElement.innerHTML = titleElement.value;
  if (titleElement.value === "Andonkata") {
    titleElement.value = "Ti si mnogo prost!";
  }

  let contentElement = document.createElement("p");
  contentElement.innerHTML = contentInputElement.value;
  contentInputElement.value = "";

  let articleElement = document.createElement("article");
  articleElement.appendChild(headingElement);
  articleElement.appendChild(contentElement);

  let articleSectionElement = document.getElementById("articles");
  articleSectionElement.appendChild(articleElement);
}
