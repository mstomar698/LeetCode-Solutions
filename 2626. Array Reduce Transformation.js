// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2626 lang=javascript
 *
 * [2626]  Array Reduce Transformation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let ans = init;
  for (let i in nums) {
    ans = fn(ans, nums[i]);
  }
  return ans;
};

// @lc code=end
