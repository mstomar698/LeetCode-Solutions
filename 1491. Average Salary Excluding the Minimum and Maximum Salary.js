// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1491 lang=javascript
*
* [1491]  Average Salary Excluding the Minimum and Maximum Salary
*/
 
// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => {
        return a-b
    })
    let total = 0
	let n = salary.length
    
    for(let i = 1; i <= n - 2 ; i++){
        total = total + salary[i]
    }
    return total/(n -2) 
};
 
// @lc code=end