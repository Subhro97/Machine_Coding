String.prototype.mySplit = function (seperator, limit) {
  let arr = [];
  if ((limit = 0)) {
    return arr;
  }
  if (!seperator) return arr.push[this];

  let count = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i] === " ") {
      arr.push[i];
      count++;
    }

    if (count === limit) break;
  }

  let startIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    arr.push(this.substring(startIdx, arr[i]));
    arr.shift();
    startIdx = arr[i] + 1;
  }

  return arr;
};

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ", 100);
console.log(words);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
