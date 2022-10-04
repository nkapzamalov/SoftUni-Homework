function salary(input) {
  let browserTabs = Number(input[0]);
  let workerSalary = Number(input[1]);

  for (let i = 2; i < input.length; i++) {
    let browserWebsites = input[i];

    if (browserWebsites === "Facebook") {
      workerSalary -= 150;
    } else if (browserWebsites === "Instagram") {
      workerSalary -= 100;
    } else if (browserWebsites === "Reddit") {
      workerSalary -= 50;
    }

    if (workerSalary <= 0) {
      console.log("You have lost your salary.");
      return;
    }
  }
  console.log(Math.floor(workerSalary));
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
