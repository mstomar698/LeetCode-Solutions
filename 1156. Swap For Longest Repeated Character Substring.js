// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1156 lang=javascript
 *
 * [1156] Swap For Longest Repeated Character Substring
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  if (text.length === 0) return 0;
  const left = [],
    right = [],
    cnts = new Array(26).fill(0);
  (left[0] = 1), (right[text.length - 1] = 1);

  //Build cnts array
  for (let i = 0; i < text.length; i++) {
    ++cnts[text.charCodeAt(i) - 'a'.charCodeAt(0)];
  }
  //Build left array
  for (let i = 1; i < text.length; i++) {
    if (text[i - 1] === text[i]) {
      left[i] = 1 + left[i - 1];
    } else {
      left[i] = 1;
    }
  }
  //Build right array
  for (let i = text.length - 2; i >= 0; i--) {
    if (text[i] === text[i + 1]) {
      right[i] = 1 + right[i + 1];
    } else {
      right[i] = 1;
    }
  }
  //Go through the text array
  //initialize res
  let res = Math.max(...cnts) >= 2 ? 2 : 1;
  for (let i = 0; i < text.length; i++) {
    //case 1
    if (left[i] > 1 && right[i] === 1) {
      let cnt = left[i];
      if (cnt < cnts[text.charCodeAt(i) - 'a'.charCodeAt(0)]) ++cnt;
      res = Math.max(res, cnt);
      //case 2
    } else if (
      left[i] === 1 &&
      i > 0 &&
      i < text.length - 1 &&
      text[i - 1] === text[i + 1]
    ) {
      let cnt = left[i - 1] + right[i + 1];
      if (cnt < cnts[text.charCodeAt(i - 1) - 'a'.charCodeAt(0)]) ++cnt;
      res = Math.max(res, cnt);
    }
  }
  return res;
};

// @lc code=end
