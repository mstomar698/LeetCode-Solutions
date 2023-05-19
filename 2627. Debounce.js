// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2627 lang=javascript
*
* [2627]  Debounce
*/
 
// @lc code=start
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout = null
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(fn, t, ...args)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
 
// @lc code=end