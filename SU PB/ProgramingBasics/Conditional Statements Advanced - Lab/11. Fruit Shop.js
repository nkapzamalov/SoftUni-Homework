function fruitShopt(input) {
  let product = input[0];
  let dayOfWeek = input[1];
  let quantity = Number(input[2]);

  let totalPrice = 0;

  if (product === "banana") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 2.5;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 2.7;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (product === "apple") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 1.2;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 1.25;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (product === "orange") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 0.85;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 0.9;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (product === "grapefruit") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 1.45;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 1.6;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (product === "kiwi") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 2.7;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 3;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (product === "pineapple") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 5.5;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 5.6;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (product === "grapes") {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        totalPrice = quantity * 3.85;
        console.log(totalPrice.toFixed(2));
        break;
      case "Saturday":
      case "Sunday":
        totalPrice = quantity * 4.2;
        console.log(totalPrice.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else {
    console.log("error");
  }
}

fruitShopt(["apple", "workday", "3"]);
