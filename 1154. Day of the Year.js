// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154]  Day of the Year
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  time = `${date.slice(0, 4)}-01-01`;
  const scale = 86400000;
  return (Date.parse(date) - Date.parse(time)) / scale + 1;
};

// @lc code=end
