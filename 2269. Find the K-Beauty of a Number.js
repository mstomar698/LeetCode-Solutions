// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2269 lang=javascript
 *
 * [2269]  Find the K-Beauty of a Number
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = (x, k) => {
  let s = x + '',
    n = s.length,
    res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sub = s.slice(i, j + 1),
        len = j - i + 1;
      if (len == k && x % (sub - '0') == 0) res++;
    }
  }
  return res;
};

// @lc code=end
