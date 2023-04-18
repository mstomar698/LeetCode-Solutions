// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768]  Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0;
  let str = '';
  while (i < word1.length && j < word2.length) {
    str += str.length % 2 == 0 ? word1[i++] : word2[j++];
  }

  while (i < word1.length) {
    str += word1[i++];
  }

  while (j < word2.length) {
    str += word2[j++];
  }

  return str;
};

// @lc code=end
