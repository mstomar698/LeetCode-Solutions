// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=319 lang=javascript
*
* [319]  Bulb Switcher
*/
 
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let c = 0
    for(let i = 1 ; i*i <= n; i++ ){
        c++
    }
    return c
};
 
// @lc code=end