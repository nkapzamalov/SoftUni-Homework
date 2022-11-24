import { html, render } from "../node_modules/lit-html/lit-html.js";

let template = (list) =>
  html` <option value=${list._id}>${list.text}</option> `;
let main = document.getElementById("menu");
let input = document.getElementById("itemText");
let url = "http://localhost:3030/jsonstore/advanced/dropdown";
initialize();
async function initialize() {
  document
    .querySelector("form")
    .addEventListener("submit", (ev) => addItem(ev, list));

  let promise = await fetch(url);
  let data = await promise.json();
  let list = Object.values(data);
  update(list);
}
function update(list) {
  let result = list.map((i) => template(i));
  render(result, main);
  input.value = "";
}

async function addItem(event, list) {
  event.preventDefault();

  let item = {
    text: input.value,
  };

  let resposne = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

  let result = await resposne.json();
  list.push(result);
  update(list);
}
