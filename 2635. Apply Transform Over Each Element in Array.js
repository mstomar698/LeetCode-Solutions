// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2635 lang=javascript
 *
 * [2635] Apply Transform Over Each Element in Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let Array = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    Array.push(fn(arr[i], i));
  }
  return Array;
};

// @lc code=end
