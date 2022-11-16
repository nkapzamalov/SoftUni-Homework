document.querySelector("form").addEventListener("submit", onRegisterSubmit);

async function onRegisterSubmit(event) {
  event.preventDefault();
  console.log(event.target);
}
