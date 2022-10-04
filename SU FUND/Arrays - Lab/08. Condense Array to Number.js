function solve(nums) {
  let sum = 0;
  while (nums.length > 1) {
    let condensed = [];
    for (let i = 0; i < nums.length - 1; i++) {
      condensed[i] = nums[i] + nums[i + 1];
      sum += condensed[i];
    }
    nums = condensed;
  }
  sum = Number(nums[0]);

  console.log(sum);
}

solve([5, 0, 4, 1, 2]);
