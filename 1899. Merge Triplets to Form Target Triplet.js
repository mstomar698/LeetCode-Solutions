// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=1899 lang=javascript
 *
 * [1899]  Merge Triplets to Form Target Triplet
 */

// @lc code=start
/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, [t1, t2, t3]) {
  const arr = triplets.filter((cur) => {
    const [c1, c2, c3] = cur;
    if (c1 > t1 || c2 > t2 || c3 > t3) return false;
    return true;
  });

  let f1 = false,
    f2 = false,
    f3 = false;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < arr.length; j++) {
      const [a1, a2, a3] = arr[j];
      if (a1 == t1) f1 = true;
      if (a2 == t2) f2 = true;
      if (a3 == t3) f3 = true;
    }
  }

  return f1 && f2 && f3;
};

// @lc code=end
