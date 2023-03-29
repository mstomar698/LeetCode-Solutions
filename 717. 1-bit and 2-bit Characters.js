// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717]  1-bit and 2-bit Characters
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 1) i++;
    i++;
  }
  return i !== bits.length;
};

// @lc code=end
