// function canConstruct(ransomNote, magazine) {
//   if (ransomNote.length > magazine.length) return false;

//   for (let i = 0; i < ransomNote.length; i++) {
//     const letter = ransomNote.substring(i, i + 1);
//     if (magazine.indexOf(letter) === -1) return false;
//     magazine = magazine.replace(letter, "");
//   }

//   return true;
// }

// function canConstruct(ransomNote, magazine) {
//   const hashObj = {};
//   for (let i = 0; i < magazine.length; i++) {
//     if (!hashObj[magazine[i]]) {
//       hashObj[magazine[i]] = 1;
//     } else {
//       hashObj[magazine[i]] += 1;
//     }
//   }

//   for (let j = 0; j < ransomNote.length; j++) {
//     if (!hashObj[ransomNote[j]]) {
//       return false;
//     } else if (!hashObj[ransomNote[j]]) {
//       return false;
//     } else {
//       hashObj[ransomNote[j]] -= 1;
//     }
//   }

//   return true;
// }

const canConstruct = (ran, mag) => {
  if (ran.length !== mag.length) return false;

  for (let i = 0; i < ran.length; i++) {
    const idx = ran[i];
    if (mag.indexOf(idx) === -1) return false;
    mag = mag.replace(idx, "");
  }

  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aab", "baa"));
