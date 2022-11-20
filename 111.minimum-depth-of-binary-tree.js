/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);
  if (!rightDepth && !leftDepth) return 1;
  if (!leftDepth) return 1 + rightDepth;
  if (!rightDepth) return 1 + leftDepth;

  return Math.min(leftDepth, rightDepth) + 1;
};
// @lc code=end
