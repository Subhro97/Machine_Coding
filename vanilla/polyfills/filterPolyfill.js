Array.prototype.myFilter = function (cb, thisRef) {
  const arr = [];

  if (this.length > 0) {
    this.forEach((val, idx) => {
      cb.call(thisRef, val, idx, this) ? arr.push(val) : null;
    });
  }

  return arr;
};

const integers = [1, 2, 3, 4, 5, 6];

const filteredArr = integers.myFilter((val, idx, arr) => val % 2 === 0);

console.log(filteredArr);
