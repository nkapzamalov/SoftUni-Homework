function solve(area, vol, input) {
  let cordinates = JSON.parse(input);

  let result = cordinates.map(function (figure) {
    return {
      area: Math.abs(area.call(figure)),
      vol: Math.abs(vol.call(figure)),
    };
  });
  return result;
}

function area() {
  return this.x * this.y;
}
function vol() {
  return this.x * this.y * this.z;
}

let res = solve(
  area,
  vol,
  `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);

console.log(res);
