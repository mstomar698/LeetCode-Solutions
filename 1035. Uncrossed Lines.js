// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1035 lang=javascript
 *
 * [1035]  Uncrossed Lines
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const n = nums1.length,
    m = nums2.length;
  let dp = new Array(m + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let temp = new Array(m + 1).fill(0);
    for (let j = m - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        temp[j] = 1 + dp[j + 1];
      } else {
        temp[j] = Math.max(dp[j], temp[j + 1]);
      }
    }
    dp = temp;
  }
  return dp[0];
};

// @lc code=end
