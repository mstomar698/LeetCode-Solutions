// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1312 lang=javascript
 *
 * [1312]  Minimum Insertion Steps to Make a String Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const dp = Array(s.length)
    .fill(0)
    .map((e) => Array(s.length).fill(null));
  const helper = (start, end) => {
    if (start >= end) return 0;
    if (s[start] === s[end]) return helper(start + 1, end - 1);
    if (dp[start][end] !== null) return dp[start][end];
    let left = 1 + helper(start + 1, end);
    let right = 1 + helper(start, end - 1);
    const min = Math.min(left, right);
    dp[start][end] = min;
    return min;
  };
  return helper(0, s.length - 1);
};

// @lc code=end
