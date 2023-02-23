// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1317 lang=javascript
*
* [1317]  Convert Integer to the Sum of Two No-Zero Integers
*/
 
// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i = 0; i < n; i++) {
        if(!i.toString().includes('0') && !(n - i).toString().includes('0')) {
            return [i, n - i];
        }
    }
    return [];
};
 
// @lc code=end