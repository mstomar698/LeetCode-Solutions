// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1406 lang=javascript
*
* [1406]  Stone Game III
*/
 
// @lc code=start
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;
  stoneValue.push(0, 0)

  let suffixSum = stoneValue[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum += stoneValue[i];
    stoneValue[i] = suffixSum - Math.min(stoneValue[i + 1], stoneValue[i + 2], stoneValue[i + 3]);
  }

  const bob = suffixSum - stoneValue[0];
  if (stoneValue[0] > bob) return "Alice"
  if (stoneValue[0] < bob) return "Bob"
  return "Tie"
};
 
// @lc code=end