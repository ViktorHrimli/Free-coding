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

function isSubsequence(s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p2++;
    } else {
      p1++;
      p2++;
    }
    false;
  }

  return p1 === s.length;
}
console.log(isSubsequence("abc", "ahbgdc"));
