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
let numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    num % 2 === 0 ? (num = num / 2) : num--;
    count++;
  }
  return count;
};

// @lc code=end
