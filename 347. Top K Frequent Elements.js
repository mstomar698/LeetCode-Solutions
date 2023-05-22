// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=347 lang=javascript
*
* [347]  Top K Frequent Elements
*/
 
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hash = {};
  for (const num of nums) {
    hash[num] ? hash[num]++ : (hash[num] = 1);
  }
  return Object.entries(hash)
    .sort((a, b) => a[1] - b[1])
    .slice(-k)
    .map((item) => item[0]);
};
 
// @lc code=end