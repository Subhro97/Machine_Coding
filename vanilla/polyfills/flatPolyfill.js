Array.prototype.myFlat = function (depth = 1) {
  let arr = [];

  if (this.length > 0) {
    arr = flatten(this, depth, 1);
  }

  return arr;
};

function flatten(arr, depth, count, newArr = []) {
  arr.forEach((val, idx) => {
    if (val.length > 0) {
      if (count <= depth || depth === Infinity)
        flatten(val, depth, count + 1, newArr);
      else {
        newArr.push(val);
      }
    } else {
      newArr.push(val);
    }
  });

  return newArr;
}

const integers = [1, 2, [3, 4, [5, 6, [7, 8]]], [9, 10]];

const flatArr = integers.myFlat();

console.log(flatArr);
