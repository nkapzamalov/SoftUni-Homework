function solve(input) {
  let list = JSON.parse(input);

  let result = list.reduce((a, b) => ({ ...a, ...b }), {});

  console.log(result);
}

solve(
  `[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`
);
