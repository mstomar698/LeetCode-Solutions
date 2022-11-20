/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfsTraversal(root, 0, targetSum)
};

var dfsTraversal = function(current, currSum, targetSum) {
    if(current === null) return false;

    currSum += current.val

    if(current.left === null && current.right === null) {
        return currSum === targetSum;
    }

    return dfsTraversal(current.left, currSum, targetSum) || dfsTraversal(current.right, currSum, targetSum);
}
// @lc code=end

