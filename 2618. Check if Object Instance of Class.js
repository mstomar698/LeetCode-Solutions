// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2618 lang=javascript
*
* [2618]  Check if Object Instance of Class
*/
 
// @lc code=start
/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj == null) return false;
    if(typeof classFunction !== 'function') return false;
    return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
 
// @lc code=end