/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };
// var twoSum = function(nums, target) {
//     let map = new Map();
//   for (let i = 0; i < nums.length; i ++) {
//     if(map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i];
//         } else {
//             map.set(nums[i], i);
//         }
//   }
//   return [];
// };
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
// @lc code=end
