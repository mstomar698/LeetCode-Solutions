// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2665 lang=javascript
 *
 * [2665]  Counter II
 */

// @lc code=start
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  n = init;

  function increment() {
    return ++n;
  }

  function decrement() {
    return --n;
  }

  function reset() {
    return (n = init);
  }
  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// @lc code=end
