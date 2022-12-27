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
  // if (totalSum === 0 && nums.lastIndexOf(1) === 5) {
  //   return -1;
  // }
  // if (totalSum === 0) {
  //   return nums.lastIndexOf(0);
  // }

  return -1;
}

console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
console.log(pivotIndex([-1, -1, 0, 0, 1, 1]));
console.log(pivotIndex([-1, -1, 0, 1, 1, 1]));

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));
