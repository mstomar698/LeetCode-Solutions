// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1372 lang=javascript
 *
 * [1372]  Longest ZigZag Path in a Binary Tree
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
var longestZigZag = function (root) {
  let max = 0;
  //lastDir: 0 for left, 1 for right
  let dfs = (node, lastDir, level) => {
    if (!node) {
      return;
    }
    if (level > max) {
      max = level;
    }
    if (lastDir === 0) {
      dfs(node.right, 1, level + 1);
      dfs(node.left, 0, 1);
    } else if (lastDir === 1) {
      dfs(node.left, 0, level + 1);
      dfs(node.right, 1, 1);
    }
  };
  dfs(root.right, 1, 1);
  dfs(root.left, 0, 1);

  return max;
};

// @lc code=end
