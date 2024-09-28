function MaxDist(A, N) {
  let minsum, maxsum, mindiff, maxdiff;
  minsum = maxsum = A[0][0] + A[0][1];
  mindiff = maxdiff = A[0][0] - A[0][1];
  for (let i = 1; i < N; i++) {
    let sum = A[i][0] + A[i][1];
    let diff = A[i][0] - A[i][1];
    if (sum < minsum) minsum = sum;
    else if (sum > maxsum) maxsum = sum;
    if (diff < mindiff) mindiff = diff;
    else if (diff > maxdiff) maxdiff = diff;
  }

  return Math.max(maxsum - minsum, maxdiff - mindiff);
}

console.log(
  MaxDist(
    [
      [0, 0],
      [3, 3],
      [2, 2],
    ],
    3
  )
);
