// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1431 lang=javascript
*
* [1431]  Kids With the Greatest Number of Candies
*/
 
// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxOfCandies = Math.max(...candies);
    let result = [];
  
    for (const i of candies) {
      if (i + extraCandies >= maxOfCandies) result.push(true);
      else result.push(false);
    }
  
    return result;
  };
 
// @lc code=end