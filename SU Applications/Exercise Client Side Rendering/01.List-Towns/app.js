import { html, render } from "../node_modules/lit-html/lit-html.js";

let btnElement = document.getElementById("btnLoadTowns");

btnElement.addEventListener("click", onLoad);

function onLoad(e) {
  e.preventDefault();
  let rootElement = document.getElementById("root");
  let inputElement = document.getElementById("towns");
  let citiesInfo = inputElement.value.split(", ").map((x) => x.trim());
  let result = cityListTempalte(citiesInfo);
  render(result, rootElement);
}

let cityTemplate = (town) => html`<li>${town}</li>`;

let cityListTempalte = (cityData) =>
  html`<ul>
    ${cityData.map(cityTemplate)}
  </ul>`;
