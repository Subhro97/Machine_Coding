// Basic Recursion

function frogJump(n, heights) {
  if (n === 0) return 0;

  let ls = frogJump(n - 1, heights) + Math.abs(heights[n] - heights[n - 1]);

  let rs = Infinity;

  if (n > 1) {
    rs = frogJump(n - 2, heights) + Math.abs(heights[n] - heights[n - 2]);
  }

  return Math.min(ls, rs);
}

let n = 4,
  heights = [10, 20, 30, 10];

console.log(frogJump(n - 1, heights));

// Memoization

function frogJumpMemoize(n, heights2, dp) {
  if (n === 0) return 0;
  if (dp[n] !== -1) return dp[n];

  let ls =
    frogJumpMemoize(n - 1, heights2, dp) +
    Math.abs(heights2[n] - heights2[n - 1]);

  let rs = Infinity;

  if (n > 1) {
    rs =
      frogJumpMemoize(n - 2, heights2, dp) +
      Math.abs(heights2[n] - heights2[n - 2]);
  }
  return (dp[n] = Math.min(ls, rs));
}

let n2 = 6,
  heights2 = [30, 10, 60, 10, 60, 50];

let dp = Array(n2 + 1).fill(-1);

console.log(frogJumpMemoize(n2 - 1, heights2, dp));

// Tabulation

let n3 = 6;
let dp2 = Array(n3).fill(-1);

dp2[0] = 0;

for (let i = 1; i < n3; i++) {
  let ls = dp2[i - 1] + Math.abs(heights2[i] - heights2[i - 1]);

  let rs = Infinity;

  if (i > 1) {
    rs = dp2[i - 2] + Math.abs(heights2[i] - heights2[i - 2]);
  }

  dp2[i] = Math.min(ls, rs);
}

console.log(dp2[n3 - 1]);

// Scape Optimization

let prev = 0,
  prev2 = 0;

for (let i = 1; i < n3; i++) {
  let ls = prev + Math.abs(heights2[i] - heights2[i - 1]);

  let rs = Infinity;

  if (i > 1) {
    rs = prev2 + Math.abs(heights2[i] - heights2[i - 2]);
  }

  let curr = Math.min(ls, rs);
  prev2 = prev;
  prev = curr;
}

console.log(prev);
