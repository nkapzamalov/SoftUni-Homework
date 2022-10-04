function towns(inputCity) {
  inputCity.forEach((element) => {
    let cityInfo = element.split(" | ");

    let city = {
      town: cityInfo[0],
      latitude: Number(cityInfo[1]).toFixed(2),
      longitude: Number(cityInfo[2]).toFixed(2),
    };
    console.log(city);
  });
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
