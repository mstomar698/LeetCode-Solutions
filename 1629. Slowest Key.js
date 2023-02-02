// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1629 lang=javascript
 *
 * [1629] Slowest Key
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  releaseTimes.unshift(0);
  let str = '',
    min = 0,
    max = 0;
  for (let i = 1; i < releaseTimes.length; i++) {
    max = releaseTimes[i] - releaseTimes[i - 1];
    if (max > min) {
      str = keysPressed[i - 1];
    } else if (max === min) {
      if (str < keysPressed[i - 1]) {
        str = keysPressed[i - 1];
      }
    }
    if (max > min) {
      min = max;
    }
  }
  return str;
};

// Another solution
// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// var slowestKey = function(releaseTimes, keysPressed) {
//     let longestTime = releaseTimes[0];
//     let letter = keysPressed[0];

//     for (let i = 1; i < releaseTimes.length; i++) {
//         if (releaseTimes[i] - releaseTimes[i - 1] > longestTime) {
//             longestTime = releaseTimes[i] - releaseTimes[i - 1];
//             letter = keysPressed[i];
//         } else if (releaseTimes[i] - releaseTimes[i - 1] === longestTime && keysPressed[i] > letter) {
//             letter = keysPressed[i];
//         }
//     }
//     return letter;
// };

// @lc code=end
