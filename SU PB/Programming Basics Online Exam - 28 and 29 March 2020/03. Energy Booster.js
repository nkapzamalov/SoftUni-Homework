function energy(input) {
  let fruit = input[0];
  let size = input[1];
  let setCount = Number(input[2]);

  let totalPrice = 0;

  switch (fruit) {
    case `Watermelon`:
      if (size === "small") {
        setPrice = 2 * 56;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      } else {
        setPrice = 5 * 28.7;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      }

      break;
    case `Mango`:
      if (size === "small") {
        setPrice = 2 * 36.66;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      } else {
        setPrice = 5 * 19.6;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      }

      break;
    case `Pineapple`:
      if (size === "small") {
        setPrice = 2 * 42.1;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      } else {
        setPrice = 5 * 24.8;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      }
      break;
    case `Raspberry`:
      if (size === "small") {
        setPrice = 2 * 20;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      } else {
        setPrice = 5 * 15.2;
        totalPrice = setPrice * setCount;
        if (totalPrice >= 400 && totalPrice <= 1000) {
          totalPrice = totalPrice * 0.85;
        } else if (totalPrice > 1000) {
          totalPrice = totalPrice * 0.5;
        }
      }
      break;
  }

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

energy(["Watermelon", "big", "4"]);
