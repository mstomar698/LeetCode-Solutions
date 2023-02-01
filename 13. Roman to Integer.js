/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var sym = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  var result = 0;
  for (var i = 0; i < s.length; i++) {
    result += sym[s[i]] * (sym[s[i]] < sym[s[i + 1]] ? -1 : 1);
  }

  return result;
};
// @lc code=end
