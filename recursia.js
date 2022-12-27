const arr = [
  1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 7, 6, 1, 2, 3, 43, 531, 12, 13, 2, 3, 5, 7,
  8, 9, 0, 0, -3, -2, -5, -7,
];

// function recursFactorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * recursFactorial(n - 1);
// }

// function fiboNum(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   }

//   return fiboNum(n - 1) + fiboNum(n - 2);
// }

// console.log(fiboNum(21));

// function hookSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivoiIndex = Math.floor(arr.length / 2);
//   const pivot = arr[pivoiIndex];
//   let less = [];
//   let greater = [];

//   for (let j = 0; j < arr.length; j++) {
//     if (j === pivoiIndex) {
//       continue;
//     }
//     if (arr[j] > pivot) {
//       greater.push(arr[j]);
//     } else {
//       less.push(arr[j]);
//     }
//   }

//   return [...hookSort(less), pivot, ...hookSort(greater)];
// }

const binaryItarativeSerch = (arr, item) => {
  let start = 0;
  let end = arr.length;
  let middle;
  let flag = false;
  let position = -1;

  while (flag === false || start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      flag = true;
      position = middle;
      return position;
    }

    if (arr[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
};

console.log(
  binaryItarativeSerch(
    arr.sort((a, b) => a - b),
    12
  )
);

// function recursSort(arr, item, start, end) {
//   let middle = Math.floor((start + end) / 2);

//   if (item === arr[middle]) {
//     return middle;
//   }
//   if (item < arr[middle]) {
//     return recursSort(arr, item, start, middle - 1);
//   } else {
//     return recursSort(arr, item, middle + 1, end);
//   }
// }

// console.log(
//   recursSort(
//     arr.sort((a, b) => a - b),
//     12,
//     0,
//     arr.length
//   )
// );
