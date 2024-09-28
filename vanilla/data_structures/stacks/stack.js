class Stack {
  constructor() {
    this.stack = [];
    this.topVal = -1;
  }

  push(val) {
    this.topVal++;
    this.stack.push(val);
  }

  pop() {
    this.topVal--;
    this.stack.pop();
  }

  top() {
    return this.stack[this.topVal];
  }

  size() {
    return this.topVal + 1;
  }

  empty() {
    return this.topVal === -1;
  }

  print() {
    console.log(this.stack);
  }
}

const st = new Stack();

// st.push(2);
// st.push(-10);

// st.push(100);

// st.pop();

// console.log(st.size());

module.exports = Stack;
