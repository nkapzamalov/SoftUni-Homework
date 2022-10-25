function notify(message) {
  let notificationElement = document.getElementById("notification");
  notificationElement.textContent = message;
  notificationElement.style.display = "none";

  setTimeout(function (e) {
    notificationElement.style.display = "block";
  }, 2000);
}
