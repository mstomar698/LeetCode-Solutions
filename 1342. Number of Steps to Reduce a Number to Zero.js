// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342]  Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  if ((num & (num - 1)) === 0) {
    return Math.log2(num) + 1;
  }
  if (num % 2 === 0) {
    return 1 + numberOfSteps(num / 2);
  }
  return 1 + numberOfSteps(num - 1);
};

// @lc code=end
