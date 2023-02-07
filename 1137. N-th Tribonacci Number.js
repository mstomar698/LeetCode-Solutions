// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137]  N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, obj = {}) {
  if (n <= 1) return n;
  if (n === 2) return 1;
  if (obj[n]) return obj[n];
  obj[n] =
    tribonacci(n - 1, obj) + tribonacci(n - 2, obj) + tribonacci(n - 3, obj);
  return obj[n];
};

// @lc code=end
