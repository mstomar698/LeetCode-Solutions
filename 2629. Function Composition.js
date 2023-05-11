// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2629 lang=javascript
 *
 * [2629]  Function Composition
 */

// @lc code=start
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    // It will reduce the index from left to right 0->2->...
    functions.reduceRight((total, output) => {
      total = output(x);
      x = total;
    }, x);

    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// @lc code=end
