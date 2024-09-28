function Foo(x) {
  let val = x;
  function bar() {
    return x;
  }
  this.baz = function (x) {
    console.log("Inner");
    return x;
  };
}
Foo.prototype.baz = function (a) {
  console.log("Proto");
  return a;
};

Foo.test = () => {
  console.log("text");
};

//
let y = new Foo(10);
// console.log(Foo.test());
// console.log(Foo.prototype.baz());

// function x(value) {
//   return function y() {
//     return value;
//   };
// }
// const val1 = x(10);

// console.log(val1());

// console.log(this);

// "use strict";

// const obj = {
//   test() {
//     return function anotherFn() {
//       console.log(this);
//     };
//   },
// };

// // obj.test()();

// function yr() {
//   console.log(this);
// }

// yr();

// const mySet1 = new Set();

// mySet1.add(1); // Set(1) { 1 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
// const o = { a: 1, b: 2 };
// mySet1.add(o);

// console.log(mySet1.entries())

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   let i = 0;
//   let j = nums.length - 1;

//   let newArr = nums.toSorted((a, b) => a - b);
//   console.log(newArr);

//   while (i < j) {
//     let sum = newArr[i] + newArr[j];

//     if (sum === target) {
//       return [nums.indexOf(newArr[i]), nums.indexOf(newArr[j])];
//     } else if (sum < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }
// };

// console.log(twoSum([3, 3], 6));

// var removeDuplicateLetters = function (s) {
//   let stack = [];
//   let visited = new Set();

//   let count = {};

//   for (let char of s) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   console.log(count)

//   for (let char of s) {
//     count[char]--;

//     if (visited.has(char)) continue;

//     if (
//       stack.length > 0 &&
//       char < stack[stack.length - 1] &&
//       count[stack[stack.length - 1]] > 0
//     ) {
//       visited.delete(stack.pop());
//     }

//     stack.push(char);
//     visited.add(char);
//   }

//   return stack.join("");
// };

// console.log(removeDuplicateLetters("bcabc"));

// var maxSubArray = function (nums) {
//   let maxi = -Infinity;
//   let sum = 0;

//   let startIdx = 0;
//   let start = 0;
//   let endIdx = 0;

//   nums.forEach((val, idx) => {
//     if (sum === 0) start = idx;

//     sum += val;
//     console.log(sum, maxi);
//     if (sum > maxi) {
//       maxi = sum;
//       startIdx = start;
//       endIdx = idx;
//     }

//     if (sum < 0) {
//       sum = 0;
//     }
//   });

//   return sum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// let maxi = Infinity;

// var merge = function (intervals) {
//   let newArr = [];

//   intervals.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1];
//     }

//     return a[0] - b[0];
//   });

//   for (let i = 0; i < intervals.length; i++) {
//     let n = newArr.length;

//     if (n > 0 && newArr[n - 1][1] >= intervals[i][0]) {
//       let arr = newArr.pop();
//       newArr.push([
//         Math.min(arr[0], intervals[i][0]),
//         Math.max(arr[0], intervals[i][1]),
//       ]);
//       console.log(
//         Math.min(arr[0], intervals[i][0]),
//         Math.max(arr[1], intervals[i][1])
//       );
//     } else {
//       newArr.push(intervals[i]);
//     }
//   }

//   return newArr;
// };

// console.log(
//   merge([
//     [1, 4],
//     [2, 3],
//   ])
// );

// function User() {
//   this.name = "John Doe";
//   this.score = 20;
//   this.sayUser = function () {
//     // when `this` is accessible
//     console.log(this.name);

//     const innerFunction = function () {
//       // when `this` refers to the global scope/object
//       console.log(this);
//     };

//     innerFunction();
//   };
// }
// let name = new User();
// name.sayUser();

// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// console.log(add(3)(5));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   let dp = Array(n + 1).fill(-1);
//   // console.log(dp);
//   return climbStairsHandler(n, dp);
// };

// const climbStairsHandler = (n, dp) => {
//   if (n === 0) return 1;

//   if (n === 1) return 1;

//   if (dp[n] !== -1) return dp[n];
//   // console.log(dp);
//   return (dp[n] =
//     climbStairsHandler(n - 1, dp) + climbStairsHandler(n - 2, dp));
// };

// console.log(climbStairs(3));

// function Counter(x) {
//   this.x = x;
//   var y = 20;
//   function gaz() {
//     console.log(x);
//   }

//   this.gab = function () {
//     console.log(x);
//   };
// }

// Counter.prototype = {
//   gar() {
//     console.log(this)
//     console.log(this.x);
//   },
// };

// const test = new Counter(10);
// const test2 = new Counter(100);

// test.gab();
// test.gar();
// console.log(test);
// test2.gar();

// async function test() {
//   try {
//     return 1;
//   } catch (err) {
//     return 2;
//   } finally {
//     return 3;
//   }
// }

// console.log(test());

// const p1 = Promise.resolve(20);
// const p2 = Promise.reject(200);
// const p3 = Promise.reject("Rejected");

// const allPromise = Promise.all([p1, p2, p3]);

// allPromise.then((value) => console.log(value)).catch((err) => console.log(err));

// class Counter {
//   #count = 0;

//   constructor() {}

//   increment() {
//     this.#count = this.#count + 1;
//     console.log(this.#count);
//   }

//   decrement() {
//     this.#count = this.#count - 1;
//     console.log(this.#count);
//   }
// }

// const test = new Counter();

// test.increment();
// test.decrement();

// const test = async function () {
//   return 10;
// };

// console.log(test());

// let p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("10"), 2000)
// );
// let p2 = new Promise((resolve, reject) => setTimeout(() => reject("20"), 3000));
// let p3 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("30"), 4000)
// );

// Promise.myAll = function (arr) {
//   return new Promise((resolve, reject) => {
//     let dataArr = [];

//     for (let i = 0; i < arr.length; i++) {
//       arr[i]
//         .then((data) => {
//           dataArr.push(data);

//           if (dataArr.length === arr.length) {
//             resolve(dataArr);
//           }
//         })
//         .catch((err) => reject(err));
//     }
//   });
// };

// Promise.myAll([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const obj = {
//   A: "12",
//   B: 23,
//   C: {
//     P: 23,
//     O: {
//       L: 56,
//     },
//     Q: [1, 2],
//   },
// };

// const flattened = function flattenObj(obj, prevLvl, newObj = {}) {
//   for (let [key, value] of Object.entries(obj)) {
//     if (typeof value == "object" && !Array.isArray(value)) {
//       flattenObj(value, key, newObj);
//     } else {
//       if (!prevLvl) newObj[key] = value;
//       else newObj[`${prevLvl}.${key}`] = value;
//     }
//   }

//   return newObj;
// };

// console.log(flattened(obj, ""));

// var exist = function (board, word) {
//   let m = board.length,
//     n = board[0].length;
//   let set = new Set();

//   function dfs(r, c, i) {
//     console.log(set, r, c, set.has(`${r},${c}`), i, "1");

//     if (i === word.length) return true;

//     if (
//       r < 0 ||
//       r === m ||
//       c < 0 ||
//       c === n ||
//       word[i] !== board[r][c] ||
//       set.has(`${r},${c}`)
//     )
//       return false;

//     console.log(set, r, c, set.has(`${r},${c}`), i, "2");

//     set.add(`${r},${c}`);

//     let res =
//       dfs(r + 1, c, i + 1) ||
//       dfs(r - 1, c, i + 1) ||
//       dfs(r, c + 1, i + 1) ||
//       dfs(r, c - 1, i + 1);

//     set.delete(`${r},${c}`);

//     return res;
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (dfs(i, j, 0)) return true;
//     }
//   }

//   return false;
// };

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCB"
//   )
// );

// class LinkNode {
//   constructor(val, next, prev) {
//     this.val = val ? val : -1;
//     this.next = next ? next : null;
//     this.prev = prev ? prev : null;
//   }
// }

// class LRUCache {
//   #cache = new Map();
//   #head = new LinkNode(); // Dummy head
//   #tail = new LinkNode(); // Dummy tail

//   constructor(capacity) {
//     this.capacity = capacity;

//     this.#head.next = this.#tail;
//     this.#tail.prev = this.#head;
//   }

//   get(key) {
//     if (this.#cache.has(key)) {
//       const node = this.#cache.get(key);
//       this._remove(node);
//       this._add(node);
//       console.log(this.#cache.keys());
//       return node.val;
//     }
//     return -1;
//   }

//   put(key, value) {
//     if (this.#cache.has(key)) {
//       this._remove(this.#cache.get(key));
//     } else if (this.#cache.size >= this.capacity) {
//       console.log(this.#tail.prev.val, "spidey")
//       this.#cache.delete(this.#tail.prev.val);
//       this._remove(this.#tail.prev);
//     }
//     const newNode = new LinkNode(key, value);
//     this._add(newNode);
//     this.#cache.set(key, newNode);
//   }

//   _remove(node) {
//     // console.log(node)
//     node.prev.next = node.next;
//     node.next.prev = node.prev;

//     node.next = null;
//     node.prev = null;
//   }

//   _add(node) {
//     node.next = this.#head.next;
//     node.prev = this.#head;
//     this.#head.next.prev = node;
//     this.#head.next = node;
//   }
// }

// let lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(3)); // returns -1 (not found)
// // lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// // console.log(lRUCache.get(1)); // return -1 (not found)
// // console.log(lRUCache.get(3)); // return 3
// // console.log(lRUCache.get(4)); // return 4

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var detectCycle = function (head) {
//   let fast = head,
//     slow = head;

//   while (fast != null && fast.next != null) {
//     fast = fast.next.next;
//     slow = slow.next;

//     if (slow === fast) {
//       console.log(slow);
//       return fast.next;
//     }
//   }

//   return null;
// };

// const head = new ListNode(1);

// const tail = new ListNode(2);

// head.next = tail;
// tail.next = head;

// console.log(detectCycle(head));

const x = new Promise((resolve) => {
  setTimeout(() => resolve(1), 100);
});

x.then((d) => {
  console.log(d);
  return d * 2;
}).then((d) => {
  console.log(d);
  return d * 3;
});

x.then((d) => {
  console.log(d);
  return d * 5;
}).then((d) => {
  console.log(d);
  return d * 7;
});
