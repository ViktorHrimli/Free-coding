function* Generator() {
  const value1 = yield { you: "lol" };
  console.log(value1);
  const value2 = yield { you: "mzf" };
  console.log(value2);
  const value3 = yield { this: this };
  console.log(value3);
}
const gen = Generator();
gen.next().value;
gen.next().value;
gen.next().value;
