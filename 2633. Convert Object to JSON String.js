// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2633 lang=javascript
*
* [2633]  Convert Object to JSON String
*/
 
// @lc code=start
/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (typeof object !== 'object') {
    if (typeof object === 'string') return '"' + object + '"';
    return object.toString();
  }
  if (object === null) return 'null';
  if (Array.isArray(object)) {
    return '[' + object.map((obj) => jsonStringify(obj)).toString() + ']';
  }
  return '{' + Object.keys(object).map(key => `"${key}":${jsonStringify(object[key])}`).join(',') + '}'
};
 
// @lc code=end