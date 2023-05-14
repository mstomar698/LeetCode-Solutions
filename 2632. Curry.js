// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2632 lang=javascript
 *
 * [2632]  Curry
 */

// @lc code=start
/**
 * @param {Function} fn
 * @return {Function}
 */
function curry(fn) {
  return function curried(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

// @lc code=end
