function solve(input) {
  let result = input.map(([width, height]) => ({
    width,
    height,
    area: () => width * height,
    compareTo: function (rect) {
      let result = this.area() - rect.area();
      if (result === 0) {
        return this.width - rect.width;
      }

      return result;
    },
  }));

  return result.sort((a, b) => {
    return b.compareTo(a);
  });
}

solve([
  [10, 5],
  [5, 12],
]);
