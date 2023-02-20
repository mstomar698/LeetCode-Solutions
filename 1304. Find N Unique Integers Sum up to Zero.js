// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304]  Find N Unique Integers Sum up to Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  if (n === 1) return [0];

  const result = [];

  for (let i = 0; i < n; i += 1) {
    if (i !== n - 1) {
      result.push(i);
    } else {
      result.push(-result.reduce((a, b) => a + b, 0));
    }
  }

  return result;
};

// @lc code=end
