// swiming dot
// console.log(0.1 + 0.2 === 0.3);
// const areEqual = (x, y) => x - y < Number.EPSILON;
// const result = 0.1 + 0.2;
// if (areEqual(result, 0.3)) console.log("wtf");

//  or
// const res = (0.1 * 100 + 0.2 * 100) / 100;

// =====
// n % === 0 or n % !== 0

// const oddOrEven = (n) => (n % 2 === 0 ? "even" : "odd");
//  or
// const oddOrEven = (n) => (n & 1 ? "odd" : "even"); // why this working?
// console.log(oddOrEven(2));
// ====

//  is Range
// const isRange = (n, start, end = null) => {
//   //   if (end && start > end) [end, start] = [start, end];
//   return end === null ? n >= 0 && n < start : n >= start && n < end;
// };

// my version
// const isRange = (n, start, end = null) => {
//   if (!end) return false;
//   const startRange = n >= start;
//   const endRange = n < end;
//   return startRange && endRange ? true : false;
// };

// console.log(isRange(2, 0, 10));
// console.log(isRange(5, 4, 6));
// ======

// toFixtNum

// const round = (n, d = 0) => +`${Math.round(`${n}e${d}`)}e-${d}`;
// or

// const round = (n, d = 0) => +n.toFixed(d);

// console.log(round(1.3564, 2));
// ====

// const arithmetickProgress = (n, max) =>
//     Array.from({ length: Math.ceil(max / n) }, (item, indx) => (indx + 1) * n);

// const arithmetickProgress = (n, max) =>
//   [].fill(max / n).map((item, indx) => (indx + 1) * n);

// console.log([]length(5).fill(undefined, 5));
// =====

// const geometricProgress = (end, start = 1, step = 2) => {
//   return Array.from({
//     length: Math.log(end / start) / Math.log(step) + 1,
//   }).map((_, indx) => start * step ** indx);
// };

// console.log(geometricProgress(30, 3, 3));
// =====
// const gcd = (...nums) => {
//   const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
//   return nums.reduce((acc, item) => _gcd(acc, item));
// };

// console.log(gcd(15, 9, 3, 6));
// =====

// const lcm = (...nums) => {
//   const gcd = (x, y) => (!y ? x : gcd(y, x % y));
//   const _lcm = (x, y) => (x * y) / gcd(x, y);
//   return nums.reduce((acc, item) => _lcm(acc, item));
// };

// console.log(lcm(20, 5));
