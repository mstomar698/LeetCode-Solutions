// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1630 lang=javascript
 *
 * [1630] Arithmetic Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = (nums, l, r) => {
  const chechArithmetic = (ar) => {
    const diff = ar[1] - ar[0];
    for (let i = 2; i < ar.length; i++)
      if (ar[i] - ar[i - 1] != diff) return false;
    return true;
  };

  return l.map((_, i) =>
    chechArithmetic(nums.slice(l[i], r[i] + 1).sort((a, b) => a - b))
  );
};
// @lc code=end
