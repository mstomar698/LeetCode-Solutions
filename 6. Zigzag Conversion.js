// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6]  Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }

  const divisor = (numRows - 1) * 2;
  const rows = Array(numRows).fill('');

  for (let dividend = 0; dividend < s.length; dividend++) {
    const mod = dividend % divisor;
    const rowIndex = mod < numRows ? mod : divisor - mod;

    rows[rowIndex] += s[dividend];
  }

  return rows.join('');
};

// @lc code=end
