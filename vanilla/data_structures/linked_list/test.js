var minPathSum = function (grid) {
  let n = grid[0].length;
  let prev = Array(n).fill(Infinity);

  for (let i = 0; i < grid.length; i++) {
    let curr = [];

    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) curr[j] = grid[0][0];
      else {
        let left = grid[i][j];

        if (j > 0) left += curr[j - 1];
        else left += Infinity;

        let up = grid[i][j] + prev[j];

        curr[j] = Math.min(left, up);
      }
    }
    console.log(curr);
    prev = curr;
  }

  return prev[n - 1];
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

minPathSum(grid);
