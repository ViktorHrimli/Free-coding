// parse("iiisdoso") => [ 8, 64 ]
// i increments the value (initially 0) +1
// d decrements the value -1
// s squares the value ^2
// o outputs the value into the return array []

// function parse(data) {
//   let res = [];

//   data.split("").reduce((cur, s) => {
//     if (s === "i") cur++;
//     if (s === "d") cur--;
//     if (s === "s") cur = Math.pow(cur, 2);
//     if (s === "o") res.push(cur);

//     return cur;
//   }, 0);

//   return res;
// }

// console.log(parse("iiisdoso"));

// function pawdawd(data) {
//   let res = [];

//   data.split("").reduce((acc, item) => {
//     if (item === "i") acc++;
//     if (item === "d") acc--;
//     if (item === "s") acc = Math.pow(acc, 2);
//     if (item === "o") res.push(acc);

//     return acc;
//   }, 0);

//   return res;
// }

// console.log(pawdawd("iiisdoso"));

const arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 7, 6, 1, 2, 3];
const calc = [];
const result = {};
console.time("a");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1]) {
    !calc.includes(arr[i]) ? calc.push(arr[i]) : null;
  }
}
console.timeEnd("a");

arr.filter((item, indx, arr) => {
  if (arr.indexOf(indx) === arr.lastIndexOf(indx)) {
    !calc.includes(item) ? calc.push(item) : null;
  }
});
calc.sort((a, b) => a - b);

arr.forEach((item) => (result[item] = item));
Object.values(result);
