import { towns } from "./towns.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

let searchTemplate = (towns, match) => html`
  <article>
    <div id="towns">
      <ul>
        ${towns.map((t) => itemTempalte(t, match))}
      </ul>
    </div>
    <input type="text" id="searchText" />
    <button @click=${toggleSearch}>Search</button>
    <div id="result"></div>
  </article>
`;

const itemTempalte = (name, match) =>
  html`
    <li
      class=${match && name.toLowerCase().includes(match.toLowerCase())
        ? "active"
        : ""}
    >
      ${name}
    </li>
  `;
let element = document.body;

function update(match = "") {
  let result = searchTemplate(towns, match);

  render(result, element);
}
update();

function toggleSearch() {
  let match = document.getElementById("searchText").value;

  update(match);
}
