function personalTitles(input) {
  let yearsOld = Number(input[0]);
  let sex = input[1];

  if (sex === "m") {
    if (yearsOld >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else {
    if (yearsOld >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}

personalTitles(["12", "f"]);
