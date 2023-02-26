// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1323 lang=javascript
*
* [1323]  Maximum 69 Number
*/
 
// @lc code=start

/**
 * @param {number} num
 * @returns {number}
 */
const maximum69Number = (num) => {
    const res = `${num}`;
    
    for(const char of res) {
        const is6 = char === '6';
        
        if(is6) {
            return +res.replace(char,'9');
        }   
    }
    
    return +res;
};
 
// @lc code=end