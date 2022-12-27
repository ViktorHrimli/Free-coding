// function twoSum(nums, target) {
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[res[0]] + nums[res[1]] === target) continue;

//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j + 1] === target && i !== j + 1) {
//         res.push(i, j + 1);
//       }
//     }
//   }
//   if (res.length > 2) {
//     return res.filter((item, indx, arr) => arr[indx] !== arr[indx + 1]);
//   } else {
//     return res;
//   }
// }

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4, 5, 6, 8], 12));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([1, 3, 4, 2], 6));
// for (let k = 0; k < res.length; k++) {
//   if (res[k] === res[k + 1]) {
//     const newArr = res.splice(2);
//     return newArr;
//   }
// }
