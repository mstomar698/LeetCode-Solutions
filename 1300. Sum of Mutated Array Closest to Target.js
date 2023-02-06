// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1300 lang=javascript
 *
 * [1300]  Sum of Mutated Array Closest to Target
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
let a, t;
const findBestValue = (A, target) => {
  (a = A), (t = target);
  let max = Math.max(...a);
  let [x, y] = BinarySearch(0, max);
  return Math.abs(cal(x) - t) <= Math.abs(cal(y) - t) ? x : y; // finally still needs compare two value answer is min difference one
};

const BinarySearch = (low, high) => {
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);
    let sum = cal(mid);
    if (sum < t) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [high, low];
};

const cal = (v) => {
  // get updated array sum
  let sum = 0;
  for (const x of a) sum += x >= v ? v : x;
  return sum;
};

// @lc code=end
