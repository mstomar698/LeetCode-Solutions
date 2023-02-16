// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1175 lang=javascript
 *
 * [1175]  Prime Arrangements
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const MOD_BASE = 10 ** 9 + 7;
const primeCount = [
  0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 9,
  9, 9, 9, 10, 10, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 14, 14, 14,
  14, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 17, 17, 18, 18, 18, 18,
  18, 18, 19, 19, 19, 19, 20, 20, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 23,
  23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25,
];
const permutationCache = [1, 1];
const helper = (n) => (
  permutationCache[n] === undefined &&
    (permutationCache[n] = (n * helper(n - 1)) % MOD_BASE),
  permutationCache[n]
);
const numPrimeArrangements = (n) =>
  Number(
    (BigInt(helper(primeCount[n])) * BigInt(helper(n - primeCount[n]))) %
      BigInt(MOD_BASE)
  );

// @lc code=end
