function solve(input) {
  function resultBuilder() {
    let list = [];

    return {
      add: function (text) {
        list.push(text);
      },
      remove: function (text) {
        list.splice(list.indexOf(text), 1);
      },
      print: function () {
        console.log(list.join(","));
      },
    };
  }
  let listBuilder = resultBuilder();

  input
    .map((x) => x.split(" "))
    .forEach(([command, text]) => listBuilder[command](text));
}

solve(["add pesho", "add george", "add peter", "remove peter", "print"]);
