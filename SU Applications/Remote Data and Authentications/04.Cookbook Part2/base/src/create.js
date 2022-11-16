document.querySelector("form").addEventListener("submit", createRecipe);

async function createRecipe(event) {
  event.preventDefault();

  const newFormData = new FormData(event.target);

  const name = newFormData.get("name");
  const img = newFormData.get("img");
  const ingredients = newFormData
    .get("ingredients")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l != "");
  const steps = newFormData
    .get("steps")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l != "");

  const token = sessionStorage.getItem("authToken");

  let response = await fetch("http://localhost:3030/data/recipes", {
    method: "post",
    headers: { "Content-Type": "application/json", "X-Authorization": token },
    body: JSON.stringify({ name, img, ingredients, steps }),
  });
  if (response.ok == false) {
    const error = await response.json();
    return alert(error.message);
  }

  window.location.pathname =
    "/SU%20Applications/Remote%20Data%20and%20Authentications/04.Cookbook%20Part2/base/index.html";
}
