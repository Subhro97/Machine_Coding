String.prototype.mySlice = function (startIdx, endIdx) {
  let str = "";

  if (startIdx < 0) startIdx = Math.max(0, this.length + startIdx);

  if (!startIdx) startIdx = 0;

  if (endIdx < 0) endIdx = Math.max(0, this.length + endIdx);

  if (!endIdx || endIdx >= this.length) endIdx = this.length;

  if (startIdx >= endIdx) return str;

  for (let i = startIdx; i < endIdx; i++) {
    str += this[i];
  }

  return str;
};

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.mySlice(31));
// Expected output: "the lazy dog."

console.log(str.mySlice(4, 19));
// Expected output: "quick brown fox"

console.log(str.mySlice(-4));
// Expected output: "dog."

console.log(str.mySlice(-9, -5));
// Expected output: "lazy"
