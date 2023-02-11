// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1331 lang=javascript
 *
 * [1331]  Rank Transform of an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let sorted = arr.slice().sort((a, b) => a - b);
  let scores = 0;
  let map = new Map();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      map.set(sorted[i], scores);
    } else {
      map.set(sorted[i], ++scores);
    }
  }

  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    answer.push(map.get(arr[i]));
  }

  return answer;
};

// @lc code=end
