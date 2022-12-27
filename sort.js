const arr = [
  1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 7, 6, 1, 2, 3, 43, 531, 12, 13, 2, 3, 5, 7,
  8, 9, 0, 0, -3, -2, -5, -7,
];

let count = 0;

// const serch = (arr, item) => {
//   let start = 0;
//   let end = arr.length;
//   let middle;
//   let found = false;
//   let position = -1;
//   while (found === false || start <= end) {
//     middle = Math.floor((start + end) / 2);
//     count += 1;

//     if (arr[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }
//     if (item < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// };
// console.log(serch(arr, 4));
// console.log(count);

// function selectSerch(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     console.log(arr[i]);
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         console.log(arr[j]);
//         minIndex = j;
//       }
//     }
//     let tmp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = tmp;
//   }
//   return arr;
// }

// console.log(selectSerch(arr));

// function bubleSerch(arr) {
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let tmp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmp;
//       }
//     }
//   }

//   return arr;
// }
// console.log(bubleSerch(arr));
