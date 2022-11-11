async function loadRepos() {
  let username = document.getElementById("username").value;
  let ulElement = document.getElementById("repos");

  let url = `https://api.github.com/users/${username}/repos`;

  try {
    const resposne = await fetch(url);
    //if (resposne.status == 402) {
    // throw new Error("error");
    //}
    const data = await resposne.json();
    ulElement.innerHTML = "";
    data.forEach((r) => {
      let newLiElement = document.createElement("li");
      newLiElement.textContent = r.full_name;
      ulElement.appendChild(newLiElement);
    });
  } catch (error) {}
}
