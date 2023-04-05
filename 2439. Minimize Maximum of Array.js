// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2439 lang=javascript
*
* [2439]  Minimize Maximum of Array
*/
 
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let ans = nums[0];
    let pref_sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        pref_sum += nums[i];
        const curr_avg = Math.ceil(pref_sum / (i + 1));
        ans = Math.max(ans, curr_avg);
    }
    return ans;
};
 
// @lc code=end