// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309]  Decrypt String from Alphabet to Integer Mapping
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let res = '';

  for (i = 0; i < s.length; i++) {
    if (s[i + 2] == '#') {
      res += String.fromCharCode(+(s[i] + s[i + 1]) + 96);
      i += 2;
    } else {
      res += String.fromCharCode(+s[i] + 96);
    }
  }

  return res;
};

// @lc code=end
