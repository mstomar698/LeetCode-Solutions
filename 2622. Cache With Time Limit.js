// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2622 lang=javascript
 *
 * [2622]  Cache With Time Limit
 */

// @lc code=start
var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const hasKey = this.cache.has(key);

  if (hasKey) {
    const [, oldRef] = this.cache.get(key);
    clearTimeout(oldRef);
  }

  const ref = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, [value, ref]);

  return hasKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  const [value] = this.cache.get(key);

  return value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

// @lc code=end
