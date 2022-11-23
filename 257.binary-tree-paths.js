/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let path = [];
  function dfstrav(currPath, root) {
    if (!root) return;
    if (!root.left && !root.right) {
      path.push([...currPath, root.val]);
    }
    dfstrav([...currPath, root.val], root.left);
    dfstrav([...currPath, root.val], root.right);
  }
  dfstrav([], root);
  // map to traverse path array and put -> after each element
  return path.map((path) => path.join('->'));
};

// var binaryTreePaths = function(root) {
//     let paths = [];
//     function dfsTraversal(curPath, root) {
//       if (!root) return;
//       curPath.push(root.val);
//       if (root.left === null && root.right === null) {
//         paths.push(curPath.join("->"));
//       }
//       dfsTraversal(curPath, root.left);
//       dfsTraversal(curPath, root.right);
//       curPath.pop();
//     }
//     dfsTraversal([], root);
//     return paths;
//   };

// var binaryTreePaths = function (root) {
//   let paths = [];

//   function dfsTraversal(root, cur) {
//     if (!root) return;
//     if (!root.left && !root.right) {
//       paths.push(cur + root.val);
//       return;
//     }
//     dfsTraversal(root.left, cur + root.val + '->');
//     dfsTraversal(root.right, cur + root.val + '->');
//   }

//   dfsTraversal(root, '');
//   return paths;
// };
// @lc code=end
