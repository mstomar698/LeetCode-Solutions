/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
  if (!root) return true;
  if (treeHeight(root) == -1) return false;
  return true;
};
var treeHeight = function (root) {
  if (!root) return 0;
  let rightTreeHeight = treeHeight(root.right);
  let leftTreeHeight = treeHeight(root.left);
  if (leftTreeHeight == -1 || rightTreeHeight == -1) return -1;
  if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) return -1;

  return Math.max(leftTreeHeight, rightTreeHeight) + 1;
};

// var isBalanced = function(root) {
//     function getHeight(node) {
//         if (node === null) return 0;
//         return Math.max( getHeight(node.left), getHeight(node.right) ) + 1;
//     }

//     if (root === null) return true;
//     return isBalanced(root.left) && isBalanced(root.right) &&
//         Math.abs( getHeight(root.left) - getHeight(root.right) ) < 2;
// };
// var isBalanced = function(root) {
//     if(!root) return true
// 	// calculate the depth of each node
//     const helper = (node, depth = 0) => {
//         if (!node) return depth
//         return Math.max(helper(node.right,depth+1), helper(node.left,depth+1))
//     }

// 	// make sure different node have both side (right and left) and height between two of them not more than 1.
//     return isBalanced(root.right) && isBalanced(root.left) && Math.abs(helper(root.right) - helper(root.left)) <= 1
// };
// @lc code=end
