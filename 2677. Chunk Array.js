// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2677 lang=javascript
 *
 * [2677]  Chunk Array
 */

// @lc code=start
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (size <= 0 || arr.length === 0) {
    return [];
  }

  var chunkedArr = [];
  var i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + size));
    i += size;
  }

  return chunkedArr;
};

// @lc code=end
