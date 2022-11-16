async function getInfo() {
  let inputElement = document.getElementById("stopId");
  let id = inputElement.value;

  let url = "http://localhost:3030/jsonstore/bus/businfo/" + id;

  let response = await fetch(url);
  let data = await response.json();

  let stopInfoElement = document.getElementById("stopName");
  stopInfoElement.textContent = data.name;
  let ulBusInfoElement = document.getElementById("buses");
  ulBusInfoElement.innerHTML = "";
  Object.entries(data.buses).map(([bus, time]) => {
    let newBusInfoLiElement = document.createElement("li");
    newBusInfoLiElement.textContent = `Bus ${bus} arrives in ${time}`;
    ulBusInfoElement.appendChild(newBusInfoLiElement);
  });
  inputElement.value = "";
}
