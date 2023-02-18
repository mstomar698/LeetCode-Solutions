// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295]  Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) =>
  nums
    .map(String)
    .reduce(
      (previousValue, currentValue) =>
        previousValue + (!(currentValue.length & 1) ? 1 : 0),
      0
    );

// @lc code=end
