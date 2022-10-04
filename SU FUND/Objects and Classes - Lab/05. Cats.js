function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];
  for (let i = 0; i < input.length; i++) {
    let catInfo = input[i].split(" ");
    let name = catInfo[0];
    let age = catInfo[1];

    cats.push(new Cat(name, age));
  }

  for (let cat of cats) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
