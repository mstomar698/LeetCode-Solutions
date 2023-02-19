// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1297 lang=javascript
 *
 * [1297]  Maximum Number of Occurrences of a Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
const maxFreq = (s, maxLetters, minSize, maxSize) => {
  const substrMap = new Map();
  let max = 0;
  outer: for (let i = 0; i <= s.length - minSize; ++i) {
    const substr = s.substr(i, minSize);
    const letterSet = new Set();
    for (const char of substr) {
      letterSet.add(char);
      if (letterSet.size > maxLetters) continue outer;
    }
    const count = substrMap.has(substr) ? substrMap.get(substr) + 1 : 1;
    substrMap.set(substr, count);
    count > max && (max = count);
  }
  return max;
};

// @lc code=end
