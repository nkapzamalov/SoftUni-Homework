function validate() {
  let inputElement = document.getElementById("email");

  inputElement.addEventListener("change", function (e) {
    console.log(e.target.value);

    let input = e.target.value;
    console.log(input);

    let pattern = /[a-z]+@[a-z]+.[a-z]+/;

    if (!pattern.test(input)) {
      inputElement.classList.add("error");
    } else {
      inputElement.classList.remove("error");
    }
  });
}
