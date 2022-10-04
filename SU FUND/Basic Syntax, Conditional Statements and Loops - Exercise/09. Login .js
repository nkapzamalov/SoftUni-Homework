function login(input) {
  let userName = input[0];
  let index = 1;

  let tryPassword = input[index];
  index++;

  let counter = 0;

  while (counter <= 4) {
    counter++;
    let reversePassword = "";
    for (let i = tryPassword.length - 1; i >= 0; i--) {
      reversePassword += tryPassword[i];
    }
    if (counter === 4 && userName !== reversePassword) {
      console.log(`User ${userName} blocked!`);
      break;
    }
    if (userName === reversePassword) {
      console.log(`User ${userName} logged in.`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }

    tryPassword = input[index];
    index++;
  }
}

login(["momo", "omom"]);
