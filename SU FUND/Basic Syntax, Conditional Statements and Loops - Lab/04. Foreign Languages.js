function languages(country) {
  let language = "";

  if (country === "USA" || country === "England") {
    language = "English";
  } else if (
    country === "Spain" ||
    country === "Argentina" ||
    country === "Mexico"
  ) {
    language = "Spanish";
  } else {
    console.log("unknown");
  }

  console.log(language);
}

languages("Germany");
