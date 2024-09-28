const arr = [1];

const value = arr.reduce((acc, val, idx, arr) => {
  console.log(acc, val, idx, arr);

  return acc + val;
});

console.log(value);
