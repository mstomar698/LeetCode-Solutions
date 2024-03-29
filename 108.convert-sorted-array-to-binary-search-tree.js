/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, beg = 0, end = nums.length - 1) {
  if (beg <= end) {
    let mid = Math.ceil((beg + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, beg, mid - 1);
    root.right = sortedArrayToBST(nums, mid + 1, end);
    return root;
  }
  return null;
};
// @lc code=end
