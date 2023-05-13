// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2623 lang=javascript
 *
 * [2623]  Memoize
 */

// @lc code=start
/**
 * @param {Function} fn
 */
function memoize(fn) {
  const memo = {};
  return function (...args) {
    const params = JSON.stringify(args);
    if (params in memo) return memo[params];
    const result = fn(...args);
    memo[params] = result;
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// @lc code=end
