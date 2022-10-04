function weatherForecast2(input) {
  let temperature = Number(input[0]);
  if (temperature >= 26 && temperature <= 35) {
    console.log("Hot");
  } else if (temperature >= 20.01 && temperature <= 25.9) {
    console.log("Warm");
  } else if (temperature >= 15.0 && temperature <= 20.0) {
    console.log("Mild");
  } else if (temperature >= 12.0 && temperature <= 14.9) {
    console.log("Cool");
  } else if (temperature >= 5.0 && temperature <= 11.9) {
    console.log("Cold");
  } else {
    console.log("unknown");
  }
}

weatherForecast2(["179"]);
