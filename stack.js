class Stack {
  stack = [];

  complete() {
    this.stack.shift();
  }

  pop() {
    this.stack.pop();
  }

  push(task) {
    this.stack.push(task);
  }

  isEmpty() {
    return this.stack.length < 1 ? true : false;
  }

  logger() {
    console.log(this.stack);
  }
}

// const stack = new Stack();

// stack.push("Minecraft");
// stack.push("CallOfDuty");
// stack.push("Doom");
// stack.push("Generals");
// stack.push("SIFU");

// // console.log(stack.isEmpty());

// stack.pop();
// stack.logger();

// const bubleSort = (arr) => {
//   let length = arr.length;
//   while (length !== 0) {
//     let max_index = 0;
//     for (let i = 0; i < length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         const temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;

//         max_index = i;
//       }
//     }
//     length = max_index;
//   }

//   return arr;
// };

const arr = [2, 5, 6, 7, 4, 8, 1];

// console.log(bubleSort(arr));

const newSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
      if (minIndex !== 1) {
        const tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr;
};

console.log(newSort(arr));
