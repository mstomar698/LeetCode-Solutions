// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1935 lang=javascript
 *
 * [1935]  Maximum Number of Words You Can Type
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  var ss = text.split(' ');
  var cnt = 0;
  var valid;
  for (var s of ss) {
    valid = true;
    for (var c of [...brokenLetters]) {
      if (s.indexOf(c) >= 0) {
        valid = false;
        break;
      }
    }
    if (valid) {
      cnt++;
    }
  }
  return cnt;
};

// @lc code=end
