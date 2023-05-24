// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2542 lang=javascript
 *
 * [2542]  Maximum Subsequence Score
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const array = [];
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    array.push([nums1[i], nums2[i]]);
  }
  array.sort((a, b) => b[1] - a[1]);

  let ans = 0;
  let sum = 0;
  const minHeap = new MinHeap([]);
  for (const [valueOne, valueTwo] of array) {
    sum += valueOne;
    minHeap.insert(valueOne);

    if (minHeap.getLength() > k) sum -= minHeap.remove();
    if (minHeap.getLength() === k) ans = Math.max(ans, sum * valueTwo);
  }

  return ans;
};

// @lc code=end
