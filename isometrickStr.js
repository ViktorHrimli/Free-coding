// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// function isIsomorphic(s, t) {
//   if (s.length !== t.length) return false;

//   const sStr = {};
//   const tStr = {};

//   for (let i = 0; i <= s.length - 1; i++) {
//     if (sStr[s[i]] !== tStr[t[i]]) {
//       return false;
//     }
//     sStr[s[i]] = i;
//     tStr[t[i]] = i;
//   }

//   return true;
// }
// console.log(isIsomorphic("paper", "title"));

// function isSubsequence(s, t) {
//   let p1 = 0;
//   let p2 = 0;
//   while (p1 < s.length && p2 < t.length) {
//     if (s[p1] === t[p2]) {
//       p2++;
//     } else {
//       p1++;
//       p2++;
//     }
//     false;
//   }

//   return p1 === s.length;
// }
// console.log(isSubsequence("abc", "ahbgdc"));

// let sum = 1;

// function numberOfSteps(num) {
//   let step = [0];
//   sum++;

//   if (num % 2 === 0) {
//     num = num / 2;
//   } else {
//     num -= 1;
//   }

//   if (num !== 0) {
//     numberOfSteps(num);
//   } else {
//     step.push(sum);
//     step.shift();
//     sum = 0;
//   }
//   return step[0];
// }

// console.log(numberOfSteps(14));
// console.log(numberOfSteps(8));
// // console.log(numberOfSteps(123));
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-Infinity);
  let prev = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;

  return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
