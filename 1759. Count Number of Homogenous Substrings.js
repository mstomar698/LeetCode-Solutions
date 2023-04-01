// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1759 lang=javascript
 *
 * [1759]  Count Number of Homogenous Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  var v = 1,
    sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) == s.charCodeAt(i + 1)) {
      v++;
      continue;
    }
    sum += (v * (v + 1)) / 2;
    v = 1;
  }

  return sum % (Math.pow(10, 9) + 7);
};

// @lc code=end
