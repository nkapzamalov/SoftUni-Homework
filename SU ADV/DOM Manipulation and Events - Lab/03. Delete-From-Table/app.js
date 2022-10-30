function deleteByEmail() {
  let inputElement = document.querySelector("input");
  let text = inputElement.value;
  let errorDivElement = document.getElementById("result");

  errorDivElement.style.display = "None";

  let trElements = document.querySelectorAll("tbody > tr");
  let pattern = /[a-z]+@[a-z].[a-z]/;
  trElements.forEach((tr) => {
    errorDivElement.style.display = "Block";
    if (pattern.test(text)) {
      if (tr.textContent.includes(text)) {
        errorDivElement.textContent = "Deleted.";

        tr.remove();
      }
    } else {
      errorDivElement.textContent = "Not found.";
    }
    inputElement.value = "";
  });
}
