function attachEvents() {
  let btnElement = document.getElementById("submit");
  btnElement.addEventListener("click", getWeather);
}
attachEvents();

async function getWeather() {
  let foreCastElement = document.getElementById("forecast");
  foreCastElement.style.display = "block";
  try {
    let inputElemen = document.getElementById("location");
    let cityName = inputElemen.value;

    let code = await getCode(cityName);

    let [currentWeather, upcomingWeather] = await Promise.all([
      getTodayForecast(code),
      getUpcomingForecast(code),
    ]);

    let currentWeatherElement = document.querySelector("#current");

    let cityDivElement = e("div", { className: "forecasts" });

    currentWeatherElement.appendChild;
  } catch (error) {
    foreCastElement.innerHTML = "Error";
  }
}

async function getCode(cityName) {
  let url = "http://localhost:3030/jsonstore/forecaster/locations";

  let resposne = await fetch(url);
  let data = await resposne.json();

  return data.find((x) => x.name.toLowerCase() == cityName.toLowerCase()).code;
}

async function getTodayForecast(code) {
  let url = "http://localhost:3030/jsonstore/forecaster/today/" + code;

  let resposne = await fetch(url);
  let data = await resposne.json();

  return data;
}

async function getUpcomingForecast(code) {
  let url = "http://localhost:3030/jsonstore/forecaster/upcoming/" + code;

  let resposne = await fetch(url);
  let data = await resposne.json();

  return data;
}

function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == "on") {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}
