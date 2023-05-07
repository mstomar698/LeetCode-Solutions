// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1964 lang=javascript
 *
 * [1964]  Find the Longest Valid Obstacle Course at Each Position
 */

// @lc code=start
/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function (obstacles) {
  const lis = [obstacles[0]];
  const res = [1];

  for (let i = 1; i < obstacles.length; i++) {
    const index = binary(lis, obstacles[i]);

    if (index < lis.length && lis[index] > obstacles[i]) {
      lis[index] = obstacles[i];
    } else {
      lis.push(obstacles[i]);
    }

    res.push(index + 1);
  }

  return res;
};

const binary = (lis, height) => {
  let l = 0;
  let r = lis.length - 1;
  let mid;

  while (r - l > 1) {
    mid = (l + r) >> 1;

    if (height >= lis[mid]) {
      l = mid;
    } else {
      r = mid;
    }
  }

  if (lis[r] <= height) {
    return r + 1;
  }

  if (lis[l] > height) {
    return 0;
  }

  return r;
};

// @lc code=end
