const objMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  var strArr = s.split("");
  var skipNext = false;

  return strArr.reduce((acc, el, ind, arr) => {
    if (skipNext) {
      skipNext = false;
      return acc;
    }
    var nextNumeral = objMap[arr[ind + 1]];
    var currentNumeral = objMap[el];

    if (nextNumeral > currentNumeral) {
      acc += nextNumeral - currentNumeral;
      skipNext = true;
    } else {
      acc += currentNumeral;
    }
    return acc;
  }, 0);
};

var romanToInt = (s) => {
  var res = 0;
  for (let i = 0; i < s.length; i++) {
    var currentNumeral = objMap[s[i]];
    var nextNumeral = objMap[s[i + 1]];

    if (currentNumeral < nextNumeral) {
      res += nextNumeral - currentNumeral;
      i++;
    } else {
      res += currentNumeral;
    }
  }
  return res;
};

var test = (s) => {
  var result = 0;

  for (let i = 0; i < s.length; i++) {
    var currentNumeral = objMap[s[i]];
    var nextNumeral = objMap[s[i + 1]];

    if (currentNumeral < nextNumeral) {
      result += nextNumeral - currentNumeral;
      i++;
    } else {
      result += currentNumeral;
    }
  }
};

console.log(test("MCMXCIV"));
