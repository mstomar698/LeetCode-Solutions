// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=649 lang=javascript
 *
 * [649]  Dota2 Senate
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const R = [];
  const D = [];
  const n = senate.length;

  // Add senators to respective queues
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      R.push(i);
    } else {
      D.push(i);
    }
  }

  // Simulate the voting process
  while (R.length > 0 && D.length > 0) {
    const rIndex = R.shift();
    const dIndex = D.shift();

    if (rIndex < dIndex) {
      R.push(rIndex + n);
    } else {
      D.push(dIndex + n);
    }
  }

  return R.length > 0 ? 'Radiant' : 'Dire';
};

// @lc code=end
