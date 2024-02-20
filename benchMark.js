// let count = 0;
// let time = performance.now();

// for (let index = 0; index < 10000000; index++) {
//   count + 1;
// }

// time = performance.now() - time;
// console.log("Время выполнения = ", time);

// var count = 0;
// var newArr = Array.from({ length: 10000000 }, (_, i) => i);

// var time = performance.now();

// newArr.reduce((acc) => count + 1);

// time = performance.now() - time;
// console.log("Время выполнения = ", time);

// var TIME_INT = 10000000;

// let time = performance.now();
// var arr = [];

// for (var index = 0; index < TIME_INT; index++) {
//   arr.push(index);
// }

// time = performance.now() - time;
// console.log("Время выполнения = ", time);

// var arr = [1, 3, 4, 5, 6, [[[[1, 2, 3]]]], [[12, [33, [[[[4, 4, 5, 6]]]]]]]];

// var doThe = (arr) => {
//   var isArr = Array.isArray;
//   var resultArr = [];
//   var thePush = Array.prototype.push.bind(resultArr);
//   var theVal;
//   for (theVal of arr) {
//     isArr(theVal)
//       ? (resultArr = resultArr.concat(doThe(theVal)))
//       : thePush(theVal);
//   }
//   return resultArr;
// };

// var diFlat = function* (theArr) {
//   var isArr = Array.isArray;
//   var theVal;

//   for (theVal of theArr) {
//     isArr(theVal) ? yield* flatten(theVal) : yield theVal;
//   }
// };

// var flatten = (theArr) => [...diFlat(theArr)];

// console.log(flatten(diFlat(arr)));

// (() => {
//   var doTh = (theKey, theObj) => {
//     var val = "red.cat.tot".matchAll(/[^.]+/g);
//     console.log(val.next().value);
//   };

//   console.log(doTh("red.cat.tot", { red: { cat: { tot: "sdsad" } } }));
// })();

// var comonFuncFindIndex = (strc) => {
//   strc.sort();

//   var firsStr = strc[0];
//   var lastStr = strc[strc.length - 1];

//   var i = 0;
//   while (i < firsStr.length && firsStr[i] === lastStr[i]) {
//     i++;
//   }
//   return firsStr.substring(0, i);
// };

// console.log(comonFuncFindIndex(["flower", "flow", "flight"]));
// console.log(comonFuncFindIndex(["dog", "racecar", "car"]));

const objMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// var romanToInt = function (s) {
//   var strArr = s.split("");
//   var skipNext = false;

//   return strArr.reduce((acc, el, ind, arr) => {
//     if (skipNext) {
//       skipNext = false;
//       return acc;
//     }
//     var nextNumeral = objMap[arr[ind + 1]];
//     var currentNumeral = objMap[el];

//     if (nextNumeral > currentNumeral) {
//       acc += nextNumeral - currentNumeral;
//       skipNext = true;
//     } else {
//       acc += currentNumeral;
//     }
//     return acc;
//   }, 0);
// };

// var romanToInt = (s) => {
//   var res = 0;
//   for (let i = 0; i < s.length; i++) {
//     var currentNumeral = objMap[s[i]];
//     var nextNumeral = objMap[s[i + 1]];

//     if (currentNumeral < nextNumeral) {
//       res += nextNumeral - currentNumeral;
//       i++;
//     } else {
//       res += currentNumeral;
//     }
//   }
//   return res;
// };

// console.log(romanToInt("MCMXCIV"));

// '(', ')', '{', '}', '[' and ']

// var objScoupe = {
//   ")": "(",
//   "}": "{",
//   "]": "[",
// };
// var stack = [];
// var bindPush = Array.prototype.push.bind(stack);
// var bindPop = Array.prototype.pop.bind(stack);

// var determinated = (s) => {
//   for (const char of s) {
//     if (char in objScoupe) {
//       var topEl = s.length === 0 ? "false" : bindPop();
//       if (topEl !== objScoupe[char]) {
//         return false;
//       }
//     } else bindPush(char);
//   }
//   return stack.length === 0;
// };

// var determinated = (s) => {
//   var str = s.split("").reduce((acc, el) => {
//     if (el in objScoupe) {
//       var topEl = stack.length === 0 ? "faf" : bindPop();
//       if (topEl !== objScoupe[el]) {
//         return false;
//       }
//     } else bindPush(el);
//   }, []);

//   return stack.length === 0;
// };

// console.log(determinated("{)}"));

// var twoSum = function (nums, target) {
//   var map = new Map();
//   var stack = [];
//   nums.reduce((acc, el, ind) => {
//     acc = target - el;
//     if (map.has(acc)) {
//       stack.push(map.get(acc), ind);
//     } else {
//       map.set(el, ind);
//     }
//   }, 0);
//   return stack;
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// var stack = new Map();
// var call = [];
// var removeDuplicates = (nums) => {
//   return nums.reduce((acc, el, ind) => {
//     stack.has(el) ? acc++ : stack.set(el, ind) & call.push(el);
//     return call;
//   }, 0);
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var str = "Fucking poland whore putins";

console.log(str.split(/\p{Zs}/u));
