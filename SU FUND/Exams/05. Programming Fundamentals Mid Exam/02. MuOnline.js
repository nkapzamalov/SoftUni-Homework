function muOnline(input) {
  let info = input.split("|");
  let health = 100;
  let bitcoins = 0;
  let counterRoom = 0;
  let madeIt = true;

  for (let i = 0; i < info.length; i++) {
    counterRoom += 1;
    let command = info[i].split(" ");
    let commands = command[0];
    let numbers = Number(command[1]);

    if (commands === "potion") {
      health += numbers;

      if (health >= 100) {
        let diference = health - 100;
        console.log(`You healed for ${numbers - diference} hp.`);
        health = 100;
        console.log(`Current health: ${health} hp.`);
      } else {
        console.log(`You healed for ${numbers} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (commands === "chest") {
      bitcoins += numbers;
      console.log(`You found ${numbers} bitcoins.`);
    } else {
      health -= numbers;
      if (health > 0) {
        console.log(`You slayed ${command[0]}.`);
      } else {
        console.log(`You died! Killed by ${command[0]}.`);
        console.log(`Best room: ${counterRoom}`);
        madeIt = false;
        break;
      }
    }
  }
  if (madeIt) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
