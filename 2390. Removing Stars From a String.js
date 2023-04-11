// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2390 lang=javascript
*
* [2390]  Removing Stars From a String
*/
 
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = [];
  for (const l of s) {
    if (l === '*') stack.pop();
    else stack.push(l);
  }

  return stack.join('');
};
 
// @lc code=end