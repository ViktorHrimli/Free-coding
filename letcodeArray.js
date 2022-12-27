function runningSum(nums) {
  let res = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    res.push(total);
  }

  return res;
}

console.log(runningSum([1, 2, 3, 4]));
