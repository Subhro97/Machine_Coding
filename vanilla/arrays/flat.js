const arr = [1, 2, [3, 4, [5, 6, [7, 8]]], [9, 10]];

const deepOne = arr.flat();
const deepTwo = arr.flat(2);
const deepInfo = arr.flat(Infinity);

console.log(deepOne);
console.log(deepTwo);
console.log(deepInfo);
