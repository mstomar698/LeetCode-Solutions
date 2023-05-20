// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2676 lang=javascript
*
* [2676]  Throttle
*/
 
// @lc code=start
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function throttle(fn, t) {
    let timerId;
    let lastArgs;
  
    return function wrapper(...args) {
      if (!timerId) {
        fn(...args);
        timerId = setTimeout(() => {
          timerId = null;
          if (lastArgs) {
            wrapper(...lastArgs);
            lastArgs = null;
          }
        }, t);
      } else {
        lastArgs = args;
      }
    };
  }
  
  /**
   * const throttled = throttle(console.log, 100);
   * throttled("log"); // logged immediately.
   * throttled("log"); // logged at t=100ms.
   */
 
// @lc code=end