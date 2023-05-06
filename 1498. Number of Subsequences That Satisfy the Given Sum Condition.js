// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1498 lang=javascript
*
* [1498]  Number of Subsequences That Satisfy the Given Sum Condition
*/
 
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1000000007;

    nums = nums.sort((a, b) => a - b);

    const pows = [1];
    
    for (let i = 1; i < nums.length; i++) {
        pows.push(pows[i - 1] * 2 % MOD);
    }
    
    let left = 0;
    let right = nums.length - 1;
    let ans = 0;

    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            ans = (ans + pows[right - left]);
            left++;
        }
    }

    return ans % MOD;
};
 
// @lc code=end