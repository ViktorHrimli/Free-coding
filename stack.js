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

const stack = new Stack();

stack.push("Minecraft");
stack.push("CallOfDuty");
stack.push("Doom");
stack.push("Generals");
stack.push("SIFU");

// console.log(stack.isEmpty());

stack.pop();
stack.logger();
