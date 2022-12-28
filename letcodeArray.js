// function runningSum(nums) {
//   let res = [];
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//     res.push(total);
//   }

//   return res;
// }

// console.log(runningSum([1, 2, 3, 4]));

function pivotIndex(nums) {
  let totalSum = 0;
  let leftSum = 0;

  nums.forEach((element) => (totalSum += element));

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

// console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
// console.log(pivotIndex([-1, -1, 0, 0, 1, 1]));
// console.log(pivotIndex([-1, -1, 0, 1, 1, 1]));

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));

function maximumWealth(accounts) {
  let total = 0;
  let totalArr = [];
  accounts.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      total += item[i];
    }

    totalArr.push(total);
    total = 0;
  });
  return Math.max(...totalArr);
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
// console.log(maximumWealth([1, 2, 3]));
// console.log(maximumWealth([2, 1, -1]));
