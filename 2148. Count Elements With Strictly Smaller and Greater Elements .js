// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2148 lang=javascript
 *
 * [2148] Count Elements With Strictly Smaller and Greater Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  if (nums.length <= 2) return 0;

  let min = Infinity;
  let max = -Infinity;

  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  //All elements are same
  if (min === max) return 0;

  let count = 0;

  for (const num of nums) {
    if (num !== min && num !== max) {
      count++;
    }
  }

  return count;
};

// @lc code=end
