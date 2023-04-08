// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=133 lang=javascript
*
* [133]  Clone Graph
*/
 
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function (node) {
  var hash = {};
  if (node != null) return dfs(node);
  else return null
    
  function dfs(node) {
    if (!node) return node;
    if (!hash[node.val]) {
      hash[node.val] = new Node(node.val);
      hash[node.val].neighbors = node.neighbors.map(dfs);
    }
    return hash[node.val];
  }
}
 
// @lc code=end