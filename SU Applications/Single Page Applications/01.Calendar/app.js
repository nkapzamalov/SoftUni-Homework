const yearsSelect = document.getElementById("years");

const years = [...document.querySelectorAll(".monthCalendar")].reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {}
);

const months = [...document.querySelectorAll(".daysCalendar")].reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {}
);

const monthsNumber = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

document.body.innerHTML = "";
document.body.appendChild(yearsSelect);

document.body.addEventListener("click", (e) => {
  if (e.target.tagName === "CAPTION") {
    let sectionId = e.target.parentNode.parentNode.id;
    if (sectionId.includes("year-")) {
      document.body.innerHTML = "";
      document.body.appendChild(yearsSelect);
    }
  } else if (e.target.tagName === "TD" || e.target.tagName === "DIV") {
    let month = e.target.textContent.trim();
    if (monthsNumber.hasOwnProperty(month)) {
      let monthNumber = monthsNumber[month];
      let parent = e.target.parentNode;
      while (parent.tagName !== "TABLE") {
        parent = parent.parentNode;
      }

      let year = parent.querySelector("caption").textContent.trim();
      let id = `month-${year}-${monthNumber}`;
      document.body.innerHTML = "";
      document.body.appendChild(months[id]);
    }
  }
});

yearsSelect.addEventListener("click", (e) => {
  if (e.target.className == "day" || e.target.className == "date") {
    e.stopImmediatePropagation();
    let id = `year-${e.target.textContent.trim()}`;
    document.body.innerHTML = "";
    document.body.appendChild(years[id]);
  }
});
