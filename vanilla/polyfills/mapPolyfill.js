Array.prototype.myMap = function (cb, thisRef) {
  const arr = [];
  if (this.length > 0) {
    this.forEach((val, idx) => {
      arr.push(cb.call(thisRef, val, idx, this));
    });
  }

  return arr;
};

const integers = [1, 2, 3, 4, 5];

const newArr = integers.myMap(
  function (val, idx, arr) {
    console.log(idx, arr, this);
    return val * 2;
  },
  { test: "Subhro" }
);

console.log(newArr);
