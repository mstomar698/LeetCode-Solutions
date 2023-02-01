/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //     let i = m - 1 , j = n - 1;
  //     let k = m + n - 1;
  //     while(i >= 0 && j >= 0) {
  //     if(nums1[i] >= nums2[j]) {
  //         nums1[k] = nums1[i];
  //         i--;
  //     } else {
  //         nums1[k] = nums2[j];
  //         j--;
  //     }
  //     k--;
  //   }

  //   while(i >= 0)
  //   nums1[k--] = nums1[i--];

  //   while(j >= 0)
  //         nums1[k--] = nums2[j--];

  //   return;
  let idx1 = m - 1,
    idx2 = n - 1,
    idx3 = m + n - 1;
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
  }
};
// @lc code=end
