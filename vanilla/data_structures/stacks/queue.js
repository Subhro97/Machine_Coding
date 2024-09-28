class Queue {
  constructor() {
    this.items = [];
    this.frontIdx = 0;
    this.rearIdx = 0;
  }

  enqueue(val) {
    this.items.push(val);
    this.rearIdx++;
  }

  dequeue() {
    if (this.items.length < 1) {
      return -1;
    }
    this.items.shift();
  }

  peek() {
    return this.items[this.frontIdx];
  }

  printQueue() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.enqueue(100);
queue.enqueue(1000);
console.log(queue.peek());
// console.log(queue.peek());
queue.printQueue();
