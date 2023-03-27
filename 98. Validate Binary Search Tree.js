// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98]  Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root, low = -Infinity, high = Infinity) {
  if (!root) {
    return true;
  }
  if (root.val < low || root.val > high) {
    return false;
  }
  return (
    isValidBST(root.left, low, root.val - 1) &&
    isValidBST(root.right, root.val + 1, high)
  );
};

// @lc code=end
