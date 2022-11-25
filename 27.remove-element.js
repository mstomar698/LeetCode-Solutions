/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let el = 0;
//   for (let i = 0; i < nums.length; i++)
//     if (nums[i] !== val) {
//       nums[el] = nums[i];
//       el++;
//     }
//   return el;
// };
var removeElement = function (nums, val) {
  while (nums.indexOf(val, 0) >= 0) {
    nums.splice(nums.indexOf(val, 0), 1);
  }
  return nums.length;
};
// @lc code=end
