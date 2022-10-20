function stopwatch() {
  let timeElement = document.getElementById("time");
  let startButtonElement = document.getElementById("startBtn");
  let stopButtonElement = document.getElementById("stopBtn");
  let interval;
  startButtonElement.addEventListener("click", function (e) {
    timeElement.textContent = "00:55";
    stopButtonElement.removeAttribute("disabled");
    startButtonElement.setAttribute("disabled", true);
    interval = setInterval(function () {
      let timeArray = timeElement.textContent.split(":");
      let minutes = Number(timeArray[0]);
      let seconds = Number(timeArray[1]);
      seconds++;
      if (seconds > 59) {
        minutes++;
        seconds = 0;
      }
      timeElement.textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
  });

  stopButtonElement.addEventListener("click", function (e) {
    startButtonElement.removeAttribute("disabled");
    stopButtonElement.setAttribute("disabled", true);
    clearInterval(interval);
  });
}
