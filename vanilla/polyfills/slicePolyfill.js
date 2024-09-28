Array.prototype.mySlice = function (start, end) {
  const arr = [];

  if (start < -this.length) {
    start = 0;
  } else if (-this.length <= start && start < 0) {
    start = start + this.length;
  } else if (start > this.length) {
    return this;
  }

  if (end < -this.length) {
    end = 0;
  } else if (-this.length <= end && end < 0) {
    end = end + this.length;
  } else if (end >= this.length) {
    end = this.length;
  }

  if (this.length > 0 || start >= end) {
    for (let i = start; i < end; i++) {
      arr.push(this[i]);
    }
  }

  return arr;
};

const arr = [1, 2, 3, 4, 5, 6];
