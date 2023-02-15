Promise.resolve().then(console.log("Promise1"));
Promise.resolve().then(console.log("Promise2"));
Promise.resolve().then(console.log("Promise3"));
Promise.resolve().then(console.log("Promise4"));

setTimeout(() => {
  Promise.resolve().then(console.log("PromiseTimout1"));
  Promise.resolve().then(console.log("PromiseTimout2"));
  Promise.resolve().then(console.log("PromiseTimout3"));
  Promise.resolve().then(console.log("PromiseTimout4"));
}, 0);

setTimeout(() => console.log("times"), 0);
