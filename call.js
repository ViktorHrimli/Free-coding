// const obj = {
//   name: "bob",
//   lastName: "Lastbob",
//   gender: "male",
//   oreintation: "gey",
//   getFullPerson() {
//     const { gender, lastName, name, oreintation } = this;
//     return `${name} ${lastName} ${oreintation}`;
//   },
// };

// function arr(callback) {
//   // console.log(callback());
// }
// arr(obj.getFullPerson.bind(obj));

// const str = "Sofia";

// class Logger {
//   constructor(str) {
//     this.str = str;
//   }

//   logerStr() {
//     const { str } = this;
//     return str.at(-1);
//   }
// }

// const logstr = new Logger(str);

// // console.log(logstr.logerStr());

// const num = [2, 3, 4, 5, 2, 1, 3, 4, 5, 6];

// console.log(num.find((item, indx, arr) => indx === arr.lastIndexOf(item)));

// const newObj = num.reduce((acc, el) => {
//   acc[el] ? (acc[el] += 1) : (acc[el] = 1);
//   return acc;
// }, {});

// console.log(newObj);

// const entr = Object.entries(newObj);

// for (const el of entr) {
//   console.log(el[1] === 1);
// }

// const getNum = num.map((item, indx, arr) => {
//   let wtf = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (item !== arr[i]) {
//       return wtf.push(arr[i]);
//     }
//   }
//   return wtf;
// });

// const arrayObj = Object.assign({}, num);

// arrayObj.method();

// console.log(arrayObj);

// function recurce(num) {
//   if (num <= 2) {
//     return num;
//   }
//   console.log(num);

//   return recurce(num - 1) + recurce(num - 2);
// }

// recurce(11);



// class Str {
//   resultStr = "";
//   intermediateStr = "";
//   indx = 0;
//   lastIndx = 0;
//   constructor(str) {
//     this.str = str;
//   }

//   getIndx() {
//     this.indx = this.str.indexOf(".") + 1;
//   }

//   getIntermadiatStr() {
//     if (this.indx === 11 || 10) {
//       this.intermediateStr = this.str.slice(this.indx);
//     }
//   }

//   getLastIndexOf() {
//     this.lastIndx = this.intermediateStr.lastIndexOf(".");
//   }

//   getResultString() {
//     this.resultStr = this.intermediateStr.slice(0, this.lastIndx);
//     console.log(this.resultStr);
//   }

//   logger() {
//     console.log(this.intermediateStr);
//     console.log(this.lastIndx);
//   }
// }

// const url = new Str("http://www.zombie-bites.com");

// url.getIndx();
// url.getIntermadiatStr();
// url.getLastIndexOf();
// url.getResultString();

// url.logger();

// getUrl("http://www.zombie-bites.com");
// getUrl("https://www.cnet.com");
