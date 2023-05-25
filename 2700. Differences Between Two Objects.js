// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2700 lang=javascript
 *
 * [2700]  Differences Between Two Objects
 */

// @lc code=start
/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  const ans = {};
  compare(obj1, obj2, [], ans);
  return ans;
}

function compare(obj1, obj2, paths, ans) {
  if (Object.is(obj1, obj2)) return;

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    const minLen = Math.min(obj1.length, obj2.length);
    for (let i = 0; i < minLen; i++) {
      compare(obj1[i], obj2[i], [...paths, i], ans);
    }
    return;
  }

  if (isPlainObject(obj1) && isPlainObject(obj2)) {
    for (const key in obj1) {
      if (!(key in obj2)) continue;
      compare(obj1[key], obj2[key], [...paths, key], ans);
    }
    return;
  }

  if (paths.length === 0) {
    ans = [obj1, obj2];
  } else {
    let curr = ans;
    for (let i = 0; i < paths.length - 1; i++) {
      const path = paths[i];
      curr[path] = curr[path] || {};
      curr = curr[path];
    }
    const lastKey = paths[paths.length - 1];
    curr[lastKey] = [obj1, obj2];
  }
}

function isPlainObject(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

// @lc code=end
