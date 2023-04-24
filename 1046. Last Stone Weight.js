// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046]  Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length < 2) return stones;
  stones.sort((a, b) => a - b);
  let a = stones.pop();
  let b = stones.pop();
  stones.push(Math.abs(a - b));
  return lastStoneWeight(stones);
};
// @lc code=end
