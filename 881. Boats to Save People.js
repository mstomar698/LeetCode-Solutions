// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=881 lang=javascript
 *
 * [881]  Boats to Save People
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => b - a);
  let count = 0,
    end = people.length - 1;

  for (let start = 0; start <= end; start++) {
    if (people[start] + people[end] <= limit) end--;
    count++;
  }
  return count;
};

// @lc code=end
