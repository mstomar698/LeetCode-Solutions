// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=516 lang=javascript
*
* [516]  Longest Palindromic Subsequence
*/
 
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let len = s.length + 1
    let n = s.length
    let dp = new Array(len)
    for(let i=0; i<len; i++)
        dp[i] = new Array(len).fill(0)

    for(let i=1; i<len; i++){
        for(let j=1; j<len; j++){
            if(s[i-1] === s[n-j])
                dp[i][j] = dp[i-1][j-1] + 1
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }

    return dp[n][n]
};
 
// @lc code=end