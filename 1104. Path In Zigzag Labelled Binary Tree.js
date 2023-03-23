// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1104 lang=javascript
 *
 * [1104]  Path In Zigzag Labelled Binary Tree
 */

// @lc code=start
var pathInZigZagTree = function (label) {
  let depth = 1;
  let result = [];
  while (true) {
    if (Math.pow(2, depth) > label) {
      break;
    }
    depth++;
  }

  let index =
    depth % 2 ? label - Math.pow(2, depth - 1) : Math.pow(2, depth) - label - 1;
  result.push(label);
  depth--;

  while (depth > 0) {
    index = Math.floor(index / 2);
    const temp =
      depth % 2
        ? Math.pow(2, depth - 1) + index
        : Math.pow(2, depth) - index - 1;
    result.push(temp);
    depth--;
  }

  return result.reverse();
};

// @lc code=end
