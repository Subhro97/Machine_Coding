const p3 = Promise.resolve({
  then(onFulfilled) {
    onFulfilled("Resolving");
    throw new Error("Throwing");
  },
});

p3.then(
  (v) => {
    console.log(v); // "Resolving"
  },
  (e) => {
    // not called
    console.log(e);
  }
);
