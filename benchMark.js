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

// var str = "Fucking poland whore putins";

// console.log(str.split(/\p{Zs}/u));

// function theNameFunc(theStrName) {
//   return () => true;
// }

// var doName = theNameFunc("TEST");

// console.log(doName.name === "TEST");

var obj = {
  data: {
    attr: {
      file: {
        blob: true,
      },
      url: "lol",
    },
    testkek: {
      arr: [0, 1, 2],
    },
    name: "james",
  },
  id: 1,
};

// var doFindKey = (obj) => {
//   var target = "arr";

//   if (obj.hasOwnProperty(target)) {
//     return (res = obj[target]);
//   } else {
//     for (const key in obj) {
//       if (typeof obj[key] === "object") {
//         // !Array.isArray(obj)
//         const result = doFindKey(obj[key]);
//         return result ? result : "NOT FOUND";
//       }
//     }
//   }
// };

// console.log(doFindKey(obj));

function doName(theStrName) {
  var kuk = () => true;

  // var kek = {
  //   [theStrName]: () => true;
  // }

  // return new Proxy(kuk, {
  //   get(target, prop) {
  //     return prop === "name" && theStrName;
  //   },
  // });

  Object.defineProperty(kuk, "name", { value: theStrName });

  return kuk;
  // return kek[theStrName]
}

var doArrow = doName("AnyName");
doArrow(); // true
console.log(doArrow.name === "AnyName"); // true

var doAnotherArrow = doName("AnotherName");
doAnotherArrow(); // true
console.log(doAnotherArrow.name === "AnotherName"); // true
