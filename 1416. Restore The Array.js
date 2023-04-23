// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1416 lang=javascript
 *
 * [1416]  Restore The Array
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function (s, k) {
  let mod = 1_000_000_007;
  let n = s.length;
  let dp = [n + 1];
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    let ans = 0;
    let start = n - i;
    for (let j = start; j < Math.min(n, start + 9); j++) {
      let num = s.substring(start, j + 1);
      if (num.charAt(0) == '0') continue;
      let val = parseInt(num);
      if (val <= k) ans = (ans + dp[n - j - 1]) % mod;
      else break;
    }
    dp[i] = ans % mod;
  }
  return dp[s.length];
};

// @lc code=end
