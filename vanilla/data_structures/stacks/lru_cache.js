const LinkedListNode = function (key, val, prev = null, next = null) {
  this.key = key;
  this.val = val;
  this.next = next;
  this.prev = prev;
};

const LRUCache = function (capacity = 3) {
  this.capacity = capacity; // Max Size of the LRU Cache
  this.size = 0; // Current Size of the LRU Cache
  this.nodeMap = {}; // Direct Access to the nodes
  this.head = new LinkedListNode(); // Points to the Most Recently Used Cache
  this.tail = new LinkedListNode(); // Points to the Least Recently Used Cache

  function promote(node) {
    evict.call(this, node);
    append.call(this, node);
  }

  function evict(node) {
    delete this.nodeMap[node.key];
    this.size -= 1;

    const prevNode = node.prev;
    const nextNode = node.next;

    // If there is one node
    if (nextNode === this.tail && prevNode === this.head) {
      this.head.next = null;
      this.tail.next = null;
      this.size = 0;
      return;
    }

    // If Head Node
    if (prevNode === this.head) {
      this.head.next = nextNode;
      nextNode.prev = this.head;
      return;
    }

    // If Tail Node
    if (nextNode === this.tail) {
      this.tail.prev = prevNode;
      prevNode.next = this.tail;
      return;
    }

    //If node is in middle

    nextNode.prev = prevNode;
    prevNode.next = nextNode;
  }

  function append(node) {
    this.nodeMap[node.key] = node;

    // First Node
    if (!this.head.next) {
      this.head.next = node;
      this.tail.prev = node;
      node.next = this.tail;
      node.prev = this.head;
    } else {
      // Existing Node
      const oldNode = this.head.next;
      this.head.next = node;
      node.next = oldNode;
      oldNode.prev = node;
      node.prev = this.head;
    }

    this.size += 1;

    if (this.size > this.capacity) {
      evict.call(this, this.tail.prev);
    }
  }

  this.get = function (key) {
    if (!this.nodeMap[key]) return -1;

    const node = this.nodeMap[key];
    promote.call(this, node);

    return node.val;
  };

  this.set = function (key, val) {
    if (this.nodeMap[key]) {
      // If node exists
      const node = this.nodeMap[key];
      node.val = val;
      promote.call(this, node);
    } else {
      // If node doesn't exists
      const node = new LinkedListNode(key, val);
      append.call(this, node);
    }
  };
};

const cache = new LRUCache();

cache.set(1, 2);
cache.set(3, 4);
cache.set(9, 10);
cache.set(3, 8);
cache.set(5, 7);

console.log(cache.get(100));
console.log(cache.get(1));
console.log(cache.get(3));
