const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(
  function (val, idx, arr) {
    console.log(val, idx, arr, this);

    return val + "Super";
  },
  { test: "Subhro" }
);
