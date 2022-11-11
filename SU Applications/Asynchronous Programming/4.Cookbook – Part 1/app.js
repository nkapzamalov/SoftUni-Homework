async function getRecipeList() {
  const url = "http://localhost:3030/jsonstore/cookbook/recipes";
  const mainElement = document.querySelector("main");

  let response = await fetch(url);
  let data = await response.json();
  mainElement.innerHTML = "";
  Object.values(data)
    .map(createPriview)
    .forEach((rec) => {
      mainElement.appendChild(rec);
    });
}

function createPriview(recipe) {
  const result = e(
    "article",
    { className: "preview" },
    e("div", { className: "title" }, e("h2", {}, recipe.name)),
    e("div", { className: "small" }, e("img", { src: recipe.img }))
  );

  result.addEventListener("click", () => {
    getRecipeIngridients(recipe._id, result);
  });

  return result;
}

async function getRecipeIngridients(id, preview) {
  const url = "http://localhost:3030/jsonstore/cookbook/details/" + id;

  let response = await fetch(url);
  let data = await response.json();
  const result = e(
    "article",
    {},
    e("h2", {}, "Ingredients:"),
    e(
      "div",
      { className: "band" },
      e("div", { className: "thumb" }, e("img", { src: data.img })),
      e(
        "div",
        { className: "ingredients" },
        e("h3", {}),
        e(
          "ul",
          {},
          data.ingredients.map((i) => e("li", {}, i))
        )
      )
    ),
    e(
      "div",
      { className: "description" },
      e("h3", {}, "Preparation:"),
      data.steps.map((s) => e("p", {}, s))
    )
  );
  preview.replaceWith(result);
}

window.addEventListener("load", () => {
  getRecipeList();
});

function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == "on") {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}
