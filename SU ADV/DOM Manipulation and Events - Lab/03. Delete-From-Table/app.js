function deleteByEmail() {
  let inputElement = document.querySelector('input[name="email"]');
  let enteredEmail = inputElement.value;

  let customerEmails = document.querySelectorAll(
    "#customers tbody td:last-child"
  );
  let isDeleted = false;
  for (const email of customerEmails) {
    if (email.textContent === enteredEmail) {
      email.parentElement.remove();
      isDeleted = true;
    }
  }

  if (!isDeleted) {
    let resultElement = document.querySelector("#result");
    resultElement.innerHTML = "Not found.";
  }
}
