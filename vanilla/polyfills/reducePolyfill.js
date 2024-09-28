Array.prototype.myReduce = function (cb, initialVal) {
  if (this.length > 0) {
    let val;
    if (initialVal) {
      val = initialVal;
      this.forEach((elm, idx) => {
        val = cb(val, elm, idx, this);
      });
    } else {
      val = this[0];
      for (let i = 1; i < this.length; i++) {
        val = cb(val, this[i], i, this);
      }
    }

    return val;
  } else {
    return new TypeError("Reduce Method cannot ben called on Empty array!");
  }
};

const integers = [1, 2, 3, 4, 5];

const value = integers.myReduce((acc, val, idx, arr) => {
  return acc + val;
});

console.log(value);
