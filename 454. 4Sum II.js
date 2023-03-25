// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=454 lang=javascript
*
* [454]  4Sum II
*/
 
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let n=nums1.length;
    let map=new Map();
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let sum=nums1[i]+nums2[j];
            map.set(sum,map.get(sum)?map.get(sum)+1:1)
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let sum=nums3[i]+nums4[j];
            if(map.has(0-sum)) count+=map.get(0-sum);
        }
    }
    return count;
};
 
// @lc code=end