// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299]  Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  var len = arr.length;
  // Pick the last element as the max element to start.
  var maxTillNow = arr[len - 1];

  // Assign the last index's value to be -1.
  arr[len - 1] = -1;

  // Go from the last, assign the previous max to the current index value.
  for (var i = len - 2; i >= 0; --i) {
    var temp = maxTillNow;
    maxTillNow = maxTillNow < arr[i] ? arr[i] : maxTillNow;
    arr[i] = temp;
  }

  return arr;
};

// @lc code=end
