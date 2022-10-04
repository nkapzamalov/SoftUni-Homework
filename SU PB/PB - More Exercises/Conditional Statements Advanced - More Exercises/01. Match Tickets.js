function matchTichets(input) {
  let budget = input[0];
  let category = input[1];
  let peopleCount = Number(input[2]);

  let transportCost = 0;

  if (peopleCount <= 4) {
    transportCost = budget * 0.75;
  } else if (peopleCount <= 9) {
    transportCost = budget * 0.6;
  } else if (peopleCount <= 24) {
    transportCost = budget * 0.5;
  } else if (peopleCount <= 49) {
    transportCost = budget * 0.4;
  } else {
    transportCost = budget * 0.25;
  }

  let budgetForTicket = budget - transportCost;
  let vipCost = peopleCount * 499.99;
  let normalCost = peopleCount * 249.99;

  if (category === "VIP") {
    if (budgetForTicket >= vipCost) {
      console.log(
        `Yes! You have ${(budgetForTicket - vipCost).toFixed(2)} leva left.`
      );
    } else {
      console.log(
        `Not enough money! You need ${(vipCost - budgetForTicket).toFixed(
          2
        )} leva.`
      );
    }
  } else {
    if (budgetForTicket >= normalCost) {
      console.log(
        `Yes! You have ${(budgetForTicket - normalCost).toFixed(2)} leva left.`
      );
    } else {
      console.log(
        `Not enough money! You need ${(normalCost - budgetForTicket).toFixed(
          2
        )} leva.`
      );
    }
  }
}

matchTichets(["1000", "Normal", "1"]);
