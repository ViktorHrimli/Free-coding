// ""  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const funcGenerator = (str) => {
  if (str.trim().split(" ").join(" ").length === 0) return false;
  const resultStr =
    "#" +
    str
      .trim()
      .split(" ")
      .map((el) => {
        if (el !== "") {
          const uper = el.split("")[0].toUpperCase();
          return uper + el.slice(1);
        }
      })
      .join("");
  if (resultStr.length > 140) return false;
  return resultStr;
};

console.log(funcGenerator(" Hello there thanks for trying my Kata"));
console.log(funcGenerator("    Hello     World   "));
console.log(
  funcGenerator(
    "                                                                                                       "
  )
);

// console.log(funcGenerator("    Hello     World   "));
//   console.log(
//     str
//       .trim()
//       .split(" ")
//       .map((el) => {
//         const uper = el.split("")[0].toUpperCase();
//         return uper + el.slice(1);
//       })
//       .join("")
//   );
