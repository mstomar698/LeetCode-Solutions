/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//     let n = cost.length
//     let first = cost[0]
//     let second = cost[1]
//     if(n<=2) return Math.min(first,second)

//     for(let i = 2; i < n; i++){
//         let curr = cost[i] + Math.min(first,second)
//         first = second
//         second = curr
//     }
//     return Math.min(first, second)
// };
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) dp[i] = cost[i];
    else dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[n - 1], dp[n - 2]);
};
// @lc code=end
