// 1. Given unit test. Create chunk method that suits given unit test

// const chunk = (arr, del) => {
//   const total = [];
//   const newArr = arr.length % del === 0;

//   if (arr.length <= del) return arr;

//   while (arr.length > 0) {
//     if (newArr) {
//       total.push(arr.splice(0, del));
//     } else {
//       total.push(arr.splice(0, del));
//     }
//   }

//   return total;
// };

// console.log(chunk([1, 2, 3, 4], 3)); // [[1, 2, 3], [4]];
// console.log(chunk([1, 2, 3, 4], 5)); // [[1, 2, 3, 4]];
// console.log(chunk([1, 2, 3, 4, 5, 6], 2)); // [1, 2], [3, 4], [5, 6];
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // [1, 2], [3, 4], [5, 6];

// const check = (str) => {
//   const obj = {};
//   const newArr = str.split("");

//   for (let i = 0; i < newArr.length; i++) {
//     obj[i] = newArr[i].reverse();
//   }

//   console.log(Object.entries(obj));
// };

// console.log(check("()[]{}"));
// console.log(check("{()[]{}}"));
// console.log(check("{()[[]]{}}"));
// console.log(check("(({{[[]]}}))"));

//  1. ()[]{} -> true
//  2. {()[]{}} -> true
//  3. {()[[]]{}} -> true
//  4. (({{[[]]}})) -> true
//  5. (() -> 'Wrong order'
//  6. )( -> 'Wrong order'
//  7. {] -> 'Wrong order'
//  8. ()] -> 'Wrong order'
//  9.   -> 'Wrong char'

// const tree = {
//   value: 16,
//   right: {
//     value: 1,
//     right: {
//       value: 1,
//       right: {
//         value: 1,
//       },
//       left: {
//         value: 12,
//       },
//     },
//     left: {
//       value: 12,
//       right: {
//         value: 1,
//       },
//       left: {
//         value: 12,
//       },
//     },
//   },
//   left: {
//     value: 12,
//     right: {
//       value: 1,
//       right: {
//         value: 1,
//       },
//       left: {
//         value: 12,
//       },
//     },
//     left: {
//       value: 12,
//       right: {
//         value: 1,
//       },
//       left: {
//         value: 12,
//       },
//     },
//   },
// };
// let newCoutn = 0;
// const binarySerch = (tree) => {
//   newCoutn += 1;
//   let count = tree.value;
//   if (tree.right) {
//     count += binarySerch(tree.right);
//   }

//   if (tree.left) {
//     count += binarySerch(tree.left);
//   }

//   return count;
// };

// const binarySerch = (tree) => {
//   let count = 0;
//   while (tree.left || tree.right) {
//     count += tree.value;
//     tree = { ...tree.left, ...tree.right };
//   }
//   return count;
// };

// console.log(binarySerch(tree));

// function someFn() {
//   return (delay) => {
//     return setInterval(() => console.log(arguments), delay);
//   };
// }

// const dalayFn = someFn(2, "arg", []);

// dalayFn(3000);
// const isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;
//   const objS = {};
//   const objT = {};
//   for (let i = 0; i < s.length; i++) {
//     console.log(objS[s[i]]);
//     console.log(objT[t[i]]);
//     if (objS[s[i]] !== objT[t[i]]) {
//       return false;
//     } else {
//       objS[s[i]] = i;
//       objT[t[i]] = i;
//     }
//     return true;
//   }
// };
// console.log(isIsomorphic("paper", "title"));

// Як відфільтрувати цей масив ⬇️
const arr = [
  {
    type: "Bar",
    categoty: "Bear",
    price: 122,
  },
  {
    type: "Bar",
    categoty: "Tea",
    price: 80,
  },
  {
    type: "Cook",
    categoty: "Salat",
    price: 321,
  },
  {
    type: "Cook",
    categoty: "Salat",
    price: 555,
  },
];

// const filterArr = (arr) => {
//   const newData = [];

//   arr.forEach((item) => {
//     if (newData.filter((newItem) => newItem.type === item.type).length > 0) {
//       if (
//         !newData
//           .find((newItem) => newItem.type === item.type)
//           .categoty.includes(item.categoty)
//       ) {
//         newData
//           .find((newItem) => newItem.type === item.type)
//           .categoty.push(item.categoty);
//       }
//     } else {
//       newData.push({ type: item.type, categoty: [item.categoty] });
//     }
//   });
//   return newData;
// };

// console.log(filterArr(arr));

// //   // В цей ⬇️
// //   ({
// //     type: "Бар",
// //     categoty: ["Пиво", "Чай"],
// //   },
// //   {
// //     type: "Кухня",
// //     categoty: ["Салати"],
// // //   })
// // // ];
// console.time("A");

// const newBinarySerch = (arr, item) => {
//   let step = 0;
//   let low = 0;
//   let high = arr.length - 1;
//   let middle;

//   while (low <= high) {
//     middle = Math.floor((low + high) / 2);
//     let num = arr[middle];
//     console.log("step :", step);

//     if (num === item) return middle;

//     if (item < num) {
//       step++;

//       high = middle - 1;
//     } else {
//       step++;

//       low = middle + 1;
//     }
//   }
//   return middle;
// };

// console.log(
//   newBinarySerch(
//     Array.from({ length: 1 }, (_, idx) => idx),
//     100
//   )
// );
// console.timeEnd("A");

const argesr = [
  3, 6, 1, 8, 2, 0, 4, 6, 5, -6, -3, -1, 26, 332, 2324, 21, 1, 2, 5, -3, -33453,
  232,
];

// const smallsEl = (arr) => {
//   let smallestIndx = 0;
//   let smalEl = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (smalEl > arr[i]) {
//       smallestIndx = i;
//       smalEl = arr[i];
//     }
//   }
//   return smallestIndx;
// };

// const serchSelections = (arr) => {
//   const res = [];

//   while (arr.length > 0) {
//     const smallst = smallsEl(arr);
//     res.push(arr[smallst]);
//     arr.splice(smallst, 1);
//   }

//   return res;
// };

const recursiveSerchSmalst = (arr) => {
  let smalstIndx = 0;
  let smalsEl = arr[0];

  if (smalsEl > arr[smalstIndx + 1]) {
    smalstIndx += 1;
    smalsEl = arr[smalstIndx];
  }
};

console.log(serchSelections(argesr));
