// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2405 lang=javascript
*
* [2405]  Optimal Partition of String
*/
 
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let map = {}
    let res = 1
    for (let letter of s) {
        if(map[letter] != undefined) {
            res++
            map = {}
        }
        map[letter] = 1
    }
    return res
};
 
// @lc code=end