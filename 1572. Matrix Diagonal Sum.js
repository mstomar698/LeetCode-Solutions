// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1572 lang=javascript
*
* [1572]  Matrix Diagonal Sum
*/
 
// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  if (mat.length === 0) {
    return 0;
  }
  let i = 0;
  let j = mat.length - 1;
  let sum = 0;
  while (i <= j) {
    if (i === j) {
      sum += mat[i][i];
      break;
    }
    sum += mat[i][i];
    sum += mat[i][j];
    sum += mat[j][j];
    sum += mat[j][i];
    i++;
    j--;
  }
  return sum;
};
 
// @lc code=end