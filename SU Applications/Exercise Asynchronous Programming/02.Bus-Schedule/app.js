function solve() {
  let departElementBtn = document.getElementById("depart");
  let arriveElementBtn = document.getElementById("arrive");
  let currentStopId = document.querySelector("#info span");

  let stop = {
    next: "depot",
  };

  async function depart() {
    let url = "http://localhost:3030/jsonstore/bus/schedule/" + stop.next;

    let response = await fetch(url);
    let data = await response.json();

    stop = data;
    currentStopId.textContent = `Next stop ${stop.name}`;

    departElementBtn.disabled = true;
    arriveElementBtn.disabled = false;
  }

  function arrive() {
    departElementBtn.disabled = false;
    arriveElementBtn.disabled = true;

    currentStopId.textContent = `Arriving at ${stop.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
