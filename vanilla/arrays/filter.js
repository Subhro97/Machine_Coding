const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter(
  function (val, idx, arr) {
    console.log(val, idx, arr, this);

    if (val % 2 == 0) {
      return true;
    }

    return false;
  },
  { test: "Subhro" }
);

console.log(newArr);
