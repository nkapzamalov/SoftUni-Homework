function lockedProfile() {
  let profilesElements = document.getElementsByClassName("profile");

  for (let profile of profilesElements) {
    let btnElement = profile.querySelector("button");
    btnElement.addEventListener("click", function (e) {
      let unlockElement = profile.querySelectorAll("input");
      let hiddenDivElement = profile.querySelector("div");

      if (unlockElement[1].checked) {
        if (btnElement.textContent === "Show more") {
          hiddenDivElement.style.display = "block";
          btnElement.textContent = "Hide it";
        } else {
          hiddenDivElement.style.display = "none";
          btnElement.textContent = "Show more";
        }
      }
    });
  }
}
