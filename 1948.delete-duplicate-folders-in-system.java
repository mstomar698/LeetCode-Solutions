/*
 * @lc app=leetcode id=1948 lang=java
 *
 * [1948] Delete Duplicate Folders in System
 */

// @lc code=start
// class Solution {
//     public List<List<String>> deleteDuplicateFolder(List<List<String>> paths) {
        
//     }
// }
//Border condition 1:
//use Treemap to make sure the same sequence hashkey genenation

//Border condition 2：
//a and z might be regarded deleted as it has same nodes even
// with different shape
//       / \
//      a   z
//     / \   \
//    c   w   c
//   /    \    \
//  b      y    b
//               \
//                w
//                 \
//                  y
// @lc code=end

