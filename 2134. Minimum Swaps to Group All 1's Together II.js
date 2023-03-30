// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2134 lang=javascript
 *
 * [2134]  Minimum Swaps to Group All 1's Together II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length;
  let ones = 0;
  let fast = 0;
  let slow = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) ones++;
  }

  if (ones === 0) return 0;

  let curOnes = 0;
  let min = ones;

  while (fast < n + ones) {
    if (nums[fast % n] === 1) curOnes++;
    if (fast >= ones) {
      if (nums[slow++] === 1) curOnes--;
      min = Math.min(min, ones - curOnes);
    }

    fast++;
  }

  return min;
};

// @lc code=end
