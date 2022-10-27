function solve(area, vol, input) {
  let inputParse = JSON.parse(input);
  let result = inputParse.map(function (figure) {
    return {
      area: area.call(figure),
      volume: vol.call(figure),
    };
  });
  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

let res = solve(
  area,
  vol,
  `[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`
);

console.log(res);
