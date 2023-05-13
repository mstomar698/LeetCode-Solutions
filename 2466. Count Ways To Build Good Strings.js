// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2466 lang=javascript
 *
 * [2466]  Count Ways To Build Good Strings
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
function countGoodStrings(low, high, zero, one) {
  const MOD = 1e9 + 7;
  const cache = new Array(high + 1).fill(-1);
  cache[0] = 1;
  let answer = 0;

  function dfs(i) {
    if (i < 0) {
      return 0;
    } else if (cache[i] >= 0) {
      return cache[i];
    }

    return (cache[i] = (dfs(i - zero) + dfs(i - one)) % MOD);
  }

  for (let i = low; i <= high; i++) {
    answer += dfs(i);
    answer %= MOD;
  }

  return answer;
}

// @lc code=end
