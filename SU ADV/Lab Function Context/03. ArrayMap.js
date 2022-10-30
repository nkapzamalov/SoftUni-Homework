function solve(arr, func) {
  return arr.reduce(function (acc, item) {
    acc.push(func(item));
    return acc;
  }, []);
}

let arr = [1, 2, 3, 4, 5];
console.log(solve(arr, (item) => item * 2));
