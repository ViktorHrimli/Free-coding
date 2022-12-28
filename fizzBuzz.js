function fizzBuzz(n) {
  const res = [];

  for (let i = 1; i <= n; i++) {
    const is3 = i % 3 === 0;
    const is5 = i % 5 === 0;

    if (is3 && is5) {
      res.push("fizzBuzz");
    }

    if (is3) {
      res.push("fizz");
      continue;
    }
    if (is5) {
      res.push("buzz");
      continue;
    }

    res.push(i.toString());
  }
  return res;
}

console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
