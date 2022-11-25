/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let duplet = 0;
//     for(let i =0; i<nums.length; i++){
//         if(nums[i]==nums[i-1]) duplet++;
//         else nums[i - duplet] == nums[i];
//     }
//     return nums.length - duplet;
// };
var removeDuplicates = function (nums) {
  let unique = 1;
  for (let i = 1; i < nums.length; i++)
    if (nums[i] !== nums[i - 1]) {
      nums[unique++] = nums[i];
    }

  return unique;
};

// @lc code=end
