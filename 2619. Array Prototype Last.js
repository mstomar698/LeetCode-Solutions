// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2619 lang=javascript
*
* [2619]  Array Prototype Last
*/
 
// @lc code=start
Array.prototype.last = function() {
    if(this.length===0)
        return -1;
    return this.pop();
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
 
// @lc code=end