function attachEventsListeners() {
  let daysInputElement = document.getElementById("days");
  let hoursInputElement = document.getElementById("hours");
  let minutesInputElement = document.getElementById("minutes");
  let secondsInputElement = document.getElementById("seconds");

  document.getElementById("secondsBtn").addEventListener("click", function (e) {
    convertTime(secondsInputElement.value);
  });
  document.getElementById("minutesBtn").addEventListener("click", function (e) {
    convertTime(minutesInputElement.value * 60);
  });
  document.getElementById("hoursBtn").addEventListener("click", function (e) {
    convertTime(hoursInputElement.value * 3600);
  });
  document.getElementById("daysBtn").addEventListener("click", function (e) {
    convertTime(daysInputElement.value * 86400);
  });
  function convertTime(time) {
    daysInputElement.value = time / (24 * 60 * 60);
    hoursInputElement.value = time / (60 * 60);
    minutesInputElement.value = time / 60;
    secondsInputElement.value = time;
  }
}
