// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304]  Find N Unique Integers Sum up to Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const result = [];
  const s = n/2;
  for(let i=0;i<s;i++) {
      result[i]=-(i+1);
      result[n-1-i]=i+1;
  }
  const ss = ~~s;
  if(ss!=s){
      result[ss]=0;
  }
  return result;
};

// @lc code=end
