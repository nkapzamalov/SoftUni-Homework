function fitness(input) {
  let amount = Number(input[0]);
  let sex = input[1];
  let yearsOld = Number(input[2]);
  let activity = input[3];

  let sportTax = 0;
  let typeSport = "";
  switch (activity) {
    case "Gym":
      switch (sex) {
        case "m":
          typeSport = "Gym";
          if (yearsOld < 19) {
            sportTax = 42 * 0.8;
          } else {
            sportTax = 42;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;

        case "f":
          typeSport = "Gym";
          if (yearsOld < 19) {
            sportTax = 35 * 0.8;
          } else {
            sportTax = 35;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;
      }

      break;
    case "Boxing":
      switch (sex) {
        case "m":
          typeSport = "Boxing";
          if (yearsOld < 19) {
            sportTax = 41 * 0.8;
          } else {
            sportTax = 41;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;

        case "f":
          typeSport = "Boxing";
          if (yearsOld < 19) {
            sportTax = 37 * 0.8;
          } else {
            sportTax = 37;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;
      }

      break;
    case "Yoga":
      switch (sex) {
        case "m":
          typeSport = "Yoga";
          if (yearsOld < 19) {
            sportTax = 45 * 0.8;
          } else {
            sportTax = 45;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;

        case "f":
          typeSport = "Yoga";
          if (yearsOld < 19) {
            sportTax = 42 * 0.8;
          } else {
            sportTax = 42;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;
      }

      break;
    case "Zumba":
      switch (sex) {
        case "m":
          typeSport = "Zumba";
          if (yearsOld < 19) {
            sportTax = 34 * 0.8;
          } else {
            sportTax = 34;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;

        case "f":
          typeSport = "Zumba";
          if (yearsOld < 19) {
            sportTax = 31 * 0.8;
          } else {
            sportTax = 31;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;
      }

      break;
    case "Dances":
      switch (sex) {
        case "m":
          typeSport = "Dances";
          if (yearsOld < 19) {
            sportTax = 51 * 0.8;
          } else {
            sportTax = 51;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;

        case "f":
          typeSport = "Dances";
          if (yearsOld < 19) {
            sportTax = 53 * 0.8;
          } else {
            sportTax = 53;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;
      }
      break;
    case "Pilates":
      switch (sex) {
        case "m":
          typeSport = "Pilates";
          if (yearsOld < 19) {
            sportTax = 39 * 0.8;
          } else {
            sportTax = 39;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;

        case "f":
          typeSport = "Pilates";
          if (yearsOld < 19) {
            sportTax = 37 * 0.8;
          } else {
            sportTax = 37;
          }

          if (amount >= sportTax) {
            console.log(`You purchased a 1 month pass for ${typeSport}.`);
          } else {
            console.log(
              `You don't have enough money! You need $${(
                sportTax - amount
              ).toFixed(2)} more.`
            );
          }

          break;
      }
      break;
  }
}

fitness(["10", "m", "50", "Pilates"]);
