// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2218 lang=javascript
*
* [2218]  Maximum Value of K Coins From Piles
*/
 
// @lc code=start
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let memo = {};
    function dp(idx, k) {
        if(idx === piles.length || k==0) return 0;
        if(memo[idx] && memo[idx][k]) {
            return memo[idx][k];
        }

        let res = dp(idx+1, k);
        let c_sum = 0;
        for(let j=0; j<Math.min(piles[idx].length, k); j++) {
            c_sum += piles[idx][j];
            res = Math.max(res, c_sum + dp(idx + 1, k - 1 - j));
        }

        if(!memo[idx]) {
            memo[idx] = {};
        }
        return memo[idx][k] = res;
    }
    return dp(0, k)
};
 
// @lc code=end