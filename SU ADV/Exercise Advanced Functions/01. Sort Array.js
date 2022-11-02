function solve(array, sortCommand) {
  let sortFunctions = {
    asc: function (arr) {
      return array.sort((a, b) => a - b);
    },

    desc: function (arr) {
      return array.sort((a, b) => b - a);
    },
  };

  let func = sortFunctions[sortCommand];

  return func(array);
}

let res = solve([14, 7, 17, 6, 8], "desc");

console.log(res);
