// const closes = (arg) => {
//   return (work) => {
//     return `Возьмите ${arg} меня на работу ${work}!`;
//   };
// };

// const awdawd = closes("Віктор");

// console.log(awdawd("back"));

// const myArray = [6, 2, 8, 4, 3, 7, 5, 1];

// const bubleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = i + 1; k < arr.length; k++) {
//       if (arr[i] >= arr[k]) {
//         const tmp = arr[k];
//         arr[k] = arr[i];
//         arr[i] = tmp;
//       }
//     }
//   }

//   return arr;
// };

// console.log(bubleSort(myArray));

// function goodVsEvil(good, evil) {
//   const arrResGood = good.split(" ").reduce((acc, num) => acc + Number(num), 0);
//   const arrResEvil = evil.split(" ").reduce((acc, num) => acc + Number(num), 0);

//   switch (true) {
//     case arrResGood < arrResEvil:
//       return "Battle Result: Evil eradicates all trace of Good";
//     case arrResGood > arrResEvil:
//       return "Battle Result: Good triumphs over Evil";
//     default:
//       return "Battle Result: No victor on this battle field";
//   }
// }

// console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
// console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
// console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0"));

// assert.equal(, 'Battle Result: Evil eradicates all trace of Good');
//   assert.equal(, 'Battle Result: Good triumphs over Evil');
//   assert.equal(,

var theCountFizzBazz = (theLength) => {
  var theArr = Array.from({ length: theLength }, (_, id) => id);
  return (theName, theNum) => {
    for (let index = theNum; index < theLength; index += theNum) {
      theArr[index] += theName;
    }
    return theArr;
  };
};

var theInitCount = theCountFizzBazz(30);
var theFizz = theInitCount("FIZZ", 3);

console.log(theFizz);
