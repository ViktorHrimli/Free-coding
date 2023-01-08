// function findIndexes(string, word) {
//   function makeMatrixFromString(str) {
//     const strArr = str.split("");
//     const res = [];
//     for (let i = 0; i < len; i += 1) {
//       res.push(strArr.slice(i * len, i * len + len));
//     }
//     return res;
//   }

//   const len = Math.sqrt(string.length);

//   const res = [];

//   const m = makeMatrixFromString(string);

//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let z = 0;

//   let visited = new Set();

//   while (res.length < word.length) {
//     if (res.length === 0) {
//       i = Math.floor(z / len);
//       j = z % len;
//       if (m[i][j] === word[k]) {
//         res.push({
//           letter: m[i][j],
//           i: i,
//           j: j,
//         });
//         k += 1;
//         visited.add(`${i}${j}`);
//       } else {
//         z += 1;
//       }
//     } else {
//       if (
//         j > 0 &&
//         m[i][j - 1] === word[k] &&
//         res[res.length - 1].left !== true
//       ) {
//         res[res.length - 1].left = true;
//         res.push({
//           letter: m[i][j - 1],
//           i: i,
//           j: j - 1,
//         });
//         k += 1;
//         j -= 1;
//         visited.add(`${i}${j}`);
//       } else if (
//         j < len &&
//         m[i][j + 1] === word[k] &&
//         res[res.length - 1].right !== true
//       ) {
//         res[res.length - 1].right = true;
//         res.push({
//           letter: m[i][j + 1],
//           i: i,
//           j: j + 1,
//         });
//         k += 1;
//         j += 1;
//         visited.add(`${i}${j}`);
//       } else if (
//         i > 0 &&
//         m[i - 1][j] === word[k] &&
//         res[res.length - 1].top !== true
//       ) {
//         res[res.length - 1].top = true;
//         res.push({
//           letter: m[i - 1][j],
//           i: i - 1,
//           j: j,
//         });
//         k += 1;
//         i -= 1;
//         visited.add(`${i}${j}`);
//       } else if (
//         i < len &&
//         m[i + 1][j] === word[k] &&
//         res[res.length - 1].bottom !== true
//       ) {
//         res[res.length - 1].bottom = true;
//         res.push({
//           letter: m[i + 1][j],
//           i: i + 1,
//           j: j,
//         });
//         k += 1;
//         i += 1;
//         visited.add(`${i}${j}`);
//       } else {
//         k -= 1;
//         res.pop();
//         visited.delete(`${i}${j}`);
//         if (res.length > 0) {
//           i = res[res.length - 1].i;
//           j = res[res.length - 1].j;
//         } else {
//           z += 1;
//         }
//       }
//     }
//   }

//   const result = res.map((el) => `[${el.i},${el.j}]`).join("->");
//   console.log(result);
// }

// findIndexes("QLGNAEKIRLRNGEAE", "KING");
// findIndexes("QLGNAEKIRULRNGEADEFB", "QUARD");
// function calcArr(arr) {
//   const newArrays = [[], [], []];
//   arr.forEach((el, i) => {
//     console.log(i % 3);
//     newArrays[i % 3].push(arr[i]);
//   });
// }

// console.log(calcArr(Array.from({ length: 10 }, (item, idx) => idx)));

// const arr = Array.from({ length: Math.random() * 100 }, (_, idx) =>
//   Math.floor(Math.random() * 1000)
// );

// console.log(arr);

// const maxNum = (arr) => {
//   return arr.reduce((acc, item, idsx) => {
//     if (!acc[0]) {
//       acc[0] = item;
//     }
//     if (acc[0] < item) {
//       acc[0] = item;
//     }
//     return acc;
//   }, {});
// };

// console.log(maxNum(arr));

// const closer = (ret) => {
//   return (text) => {
//     console.log(`Hello: I want works frontend deveoper ${text}`);
//     return ret;
//   };
// };

// const wdad = closer("This is closest arrow func");
// console.log(wdad("Teke me offer pls :)"));

// function BindFunc(name, year) {
//   return {
//     a: this,
//     name,
//     year,
//   };
// }

// // const wtf = bindFunc.bind({ a: 2 }, "Bitch", "all Time");

// // console.log(wtf());

// // console.log(bindFunc.apply({ a: 2 }, ["Tsla", 2002]));
// // console.log(bindFunc.call({ a: 2 }, "Tsla", 2002));

// const awdawd = new BindFunc("awwad", 202002);
// console.log(awdawd.__proto__ === Function.prototype);
