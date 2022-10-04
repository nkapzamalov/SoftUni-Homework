function invetory(input) {
  let heroes = [];

  input.forEach((line) => {
    let info = line.split(" / ");
    let heroName = info[0];
    let level = Number(info[1]);
    let items = info[2];
    heroes.push({ Hero: heroName, level: level, items: items.split(" ") });
  });

  heroes.sort((a, b) => {
    return a.level - b.level;
  });

  heroes.forEach((hero) => {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    let resultItems = "";
    for (let i = 0; i < hero.items.length; i++) {
      resultItems += `${hero.items[i]} `;
    }
    console.log(`items => ${resultItems}`);
  });
}

invetory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
