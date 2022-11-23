import { render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";
import cardTemplate from "./card.js";

let container = document.getElementById("contacts");
let result = contacts.map(cardTemplate);
render(result, container);
