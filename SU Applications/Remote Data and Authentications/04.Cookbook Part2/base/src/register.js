document.querySelector("form").addEventListener("submit", onRegisterSubmit);

async function onRegisterSubmit(event) {
  event.preventDefault();

  const formdData = new FormData(event.target);

  const email = formdData.get("email");
  const password = formdData.get("password");
  const rePassword = formdData.get("rePass");

  if (email === "" || password === "") {
    return alert("All fields must be filled!");
  } else if (password != rePassword) {
    return alert("Passwords don`t match");
  }

  const response = await fetch("http://localhost:3030/users/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok == false) {
    const error = await response.json();
    return alert(error.message);
  }

  let data = await response.json();

  let authToken = data.accessToken;

  sessionStorage.setItem("authToken", authToken);

  window.location.pathname =
    "/SU%20Applications/Remote%20Data%20and%20Authentications/04.Cookbook%20Part2/base/index.html";
}
