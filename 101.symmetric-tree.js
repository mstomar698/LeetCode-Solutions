/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (!root) return true;

  return isSym(root.left, root.right);
};

var isSym = function (lr, rr) {
  if ((!lr && rr) || (lr && !rr) || (lr && rr && lr.val !== rr.val))
    return false;
  if (lr && rr) return isSym(lr.left, rr.right) && isSym(lr.right, rr.left);
  return true;
};
// @lc code=end
