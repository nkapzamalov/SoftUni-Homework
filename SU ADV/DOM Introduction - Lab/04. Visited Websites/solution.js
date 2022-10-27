function solve() {
  let webSitesElement = document.getElementsByClassName("link-1");

  let webSitesArray = Object.values(webSitesElement);

  webSitesArray.forEach((website) => {
    website.addEventListener("click", () => {
      let pElement = website.querySelector("p");
      let counter = Number(pElement.textContent.split(" ")[1]);
      counter++;
      pElement.textContent = `visited ${counter} times`;
    });
  });
}
