/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];

  let stack = [];
  let traversal = [];
  stack.push(root);

  while (stack.length) {
    let curr = stack[stack.length - 1];

    if (curr.left) {
      stack.push(curr.left);
      curr.left = null;
    } else if (curr.right) {
      stack.push(curr.right);
      curr.right = null;
    } else {
      traversal.push(stack.pop().val);
    }
  }

  return traversal;
};

// var postorderTraversal = function(root) {
//     let traversal = []

//     postTraversal(root)
//     return traversal

//     function postTraversal(node) {
//         if (!node) return;
//         postTraversal(node.left);
//         postTraversal(node.right);
//         traversal.push(node.val);
//     }
// }
// @lc code=end
