// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2140 lang=javascript
 *
 * [2140]  Solving Questions With Brainpower
 */

// @lc code=start
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  // dp[i] gives max possible score from i to last element
  const n = questions.length,
    dp = Array(n + 1).fill(0);

  // Loop from last element to first
  for (let i = n - 1; ~i; --i) {
    const [x, y] = questions[i]; // (x,y) = (power, brainpower)

    // For each position get max possible score
    dp[i] = Math.max(dp[i + 1], (dp[i + y + 1] || 0) + x);
  }

  return dp[0];
};

// @lc code=end
