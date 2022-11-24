import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";

let sectionElement = document.getElementById("allCats");

let renderCatsTemplate = (catsInfo) => html`
  <li>
    <img
      src="./images/${catsInfo.imageLocation}.jpg"
      width="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn">Show status code</button>
      <div class="status" style="display: none" id=${catsInfo.id}>
        <h4>${catsInfo.statusCode}</h4>
        <p>${catsInfo.statusMessage}</p>
      </div>
    </div>
  </li>
`;

let templatedCats = cats.map((cat) => renderCatsTemplate(cat));
let result = html`<ul @click=${toggleInfo}>
  ${templatedCats}
</ul>`;

function toggleInfo(event) {
  let element = event.target.parentNode.querySelector(".status");

  if (element.style.display == "none") {
    element.removeAttribute("style");
  } else {
    element.style.display = "none";
  }
}

render(result, sectionElement);
