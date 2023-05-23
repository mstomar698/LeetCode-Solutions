// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=703 lang=javascript
*
* [703]  Kth Largest Element in a Stream
*/
 
// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.num = nums;
    this.target = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.num.push(val);
    this.num.sort((a,b) => a-b);
    return this.num[this.num.length - this.target];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
 
// @lc code=end