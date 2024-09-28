function lcss(s1, s2) {
  let n1 = s1.length;
  let n2 = s2.length;
  let ans = 0;

  let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

  function lcssUtils(n, m) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        // If the characters match, update 'dp' and 'ans'
        if (s1[i - 1] === s2[j - 1]) {
          const val = 1 + dp[i - 1][j - 1];
          dp[i][j] = val;
          ans = Math.max(ans, val);
        } else {
          // If characters don't match, set 'dp' to 0 for the current position
          dp[i][j] = 0;
        }
      }
    }

    // 'ans' now contains the length of the longest common substring
    return ans;
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
  return {
    length: lcssUtils(n1, n2),
    // string: constructLcs(n1 - 1, n2 - 1),
  };
}

let s1 = "abcjklp",
  s2 = "acjkp";

console.log(lcss(s1, s2));

// T.C -> O(NxM);  S.C -> O(NxM)(DP Array) + O(N+M)(Auxullary Stack Space)
