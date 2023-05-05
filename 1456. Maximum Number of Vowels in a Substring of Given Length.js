// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1456 lang=javascript
 *
 * [1456]  Maximum Number of Vowels in a Substring of Given Length
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const isVowel = Array.from(s).map((c) => vowels.has(c));

  let vCurrent = 0;

  for (i = 0; i < k; i++) vCurrent += isVowel[i];

  let vMax = vCurrent;
  for (i = k; i < s.length; i++) {
    vCurrent += isVowel[i] - isVowel[i - k];
    if (vCurrent === k) return k;
    vMax = Math.max(vMax, vCurrent);
  }

  return vMax;
};

// @lc code=end
