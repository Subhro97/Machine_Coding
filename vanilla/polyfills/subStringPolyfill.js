String.prototype.mySubString = function (startIdx, endIdx) {
  if (!startIdx || startIdx < 0) startIdx = 0;

  if (startIdx >= this.length) return "";

  if (endIdx >= this.length || !endIdx) endIdx = this.length;

  if (startIdx >= endIdx) {
    let temp = startIdx;
    startIdx = endIdx;
    endIdx = temp;
  }

  let str = "";

  for (let i = startIdx; i < endIdx; i++) {
    str += this[i];
  }

  return str;
};

const str = "Mozilla";

console.log(str.mySubString(1, 3));
// Expected output: "oz"

console.log(str.mySubString(2));
console.log(str.mySubString(3, 1));
console.log(str.mySubString(NaN));
console.log(str.mySubString(-2));
