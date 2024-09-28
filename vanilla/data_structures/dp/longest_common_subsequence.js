function lcs(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;

  let dp = Array.from({ length: n1 }, () => Array(n2).fill(-1));

  function lcsUtils(i, j) {
    if (i < 0 || j < 0) {
      return 0;
    }

    if (dp[i][j] !== -1) return dp[i][j];

    if (s1[i] === s2[j]) {
      return (dp[i][j] = 1 + lcsUtils(i - 1, j - 1));
    } else {
      return (dp[i][j] = Math.max(lcsUtils(i - 1, j), lcsUtils(i, j - 1)));
    }
  }

  function constructLcs(i, j) {
    if (i < 0 || j < 0) {
      return "";
    }

    if (s1[i] === s2[j]) {
      return constructLcs(i - 1, j - 1) + s1[i];
    } else {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        return constructLcs(i - 1, j);
      } else {
        return constructLcs(i, j - 1);
      }
    }
  }

  const length = lcsUtils(n1 - 1, n2 - 1);
  const string = constructLcs(n1 - 1, n2 - 1);

  return {
    length,
    string,
  };
}

let s1 = "bbbab",
  s2 = "acjkp";

console.log(lcs(s1, s2).string);

// T.C -> O(NxM);  S.C -> O(NxM)(DP Array) + O(N+M)(Auxullary Stack Space)
