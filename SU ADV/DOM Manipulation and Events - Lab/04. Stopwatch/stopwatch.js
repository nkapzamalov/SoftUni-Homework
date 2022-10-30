function stopwatch() {
  let timerElement = document.getElementById("time");
  let startBtnElement = document.getElementById("startBtn");
  let stopBtnElement = document.getElementById("stopBtn");
  let text = timerElement.textContent;
  let counter;

  startBtnElement.addEventListener("click", function (e) {
    timerElement.textContent = text;
    startBtnElement.disabled = true;
    stopBtnElement.disabled = false;
    let [textMinutes, textSeconds] = timerElement.textContent.split(":");
    let minutes = Number(textMinutes);
    let seconds = Number(textSeconds);
    counter = setInterval(() => {
      seconds++;
      if (seconds > 59) {
        seconds = 0;
        minutes++;
      }
      timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    }, 1000);
  });
  stopBtnElement.addEventListener("click", function (e) {
    stopBtnElement.setAttribute("disabled", false);
    startBtnElement.disabled = false;
    clearInterval(counter);
  });
}
