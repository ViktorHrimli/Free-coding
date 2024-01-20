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

var comonFuncFindIndex = (strc) => {
  strc.sort();

  var firsStr = strc[0];
  var lastStr = strc[strc.length - 1];

  var i = 0;
  while (i < firsStr.length && firsStr[i] === lastStr[i]) {
    i++;
  }
  return firsStr.substring(0, i);
};

console.log(comonFuncFindIndex(["flower", "flow", "flight"]));
console.log(comonFuncFindIndex(["dog", "racecar", "car"]));
