// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2625 lang=javascript
*
* [2625]  Flatten Deeply Nested Array
*/
 
// @lc code=start
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) {
    return arr;
  }

  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const subArray = flat(arr[i], n - 1);
      ans.push(...subArray);
    } else {
      ans.push(arr[i]);
    }
  }
  return ans; 
};
 
// @lc code=end