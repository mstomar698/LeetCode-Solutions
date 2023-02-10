// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302]  Deepest Leaves Sum
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

var deepestLeavesSum = function (root) {
  let prevLevel = [];
  let currLevel = [root];
  do {
    prevLevel = currLevel;
    currLevel = [];
    for (const node of prevLevel) {
      if (node.left != null) {
        currLevel.push(node.left);
      }
      if (node.right != null) {
        currLevel.push(node.right);
      }
    }
  } while (currLevel.length);
  return prevLevel.reduce((r, n) => r + n.val, 0);
};

// @lc code=end
