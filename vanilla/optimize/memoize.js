function memoize(fn) {
  let cache = {};

  return function memoizedFn(...args) {
    const key = JSON.stringify(args);

    console.log(key);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn.apply(this, args);

    return result;
  };
}

function fibonnaci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

// console.log(memoize(fibonnaci)(40));
// console.log(fibonnaci(40));
