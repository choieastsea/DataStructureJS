class Stack {
  top = 0;
  list = [];
  push = (element) => {
    this.list.push(element);
    this.top += 1;
  };
  pop = () => {
    //빈 stack pop한 경우
    if (this.top <= 0) {
      return new Error('Stack Underflow');
    } else {
      //원소 있을때 pop한 경우
      this.top -= 1;
      return this.list.pop();
    }
  };
  isEmpty = () => {
    return this.top === 0;
  };
  print = () => {
    for (let i = this.list.length - 1; i >= 0; i--) {
      console.log(`| ${this.list[i]} |`);
    }
    console.log(`‾‾‾‾‾`);
  };
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(3);
stack.push(5);
console.log(`top: ${stack.top}`);
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(`top: ${stack.top}`);
console.log(stack.isEmpty());
