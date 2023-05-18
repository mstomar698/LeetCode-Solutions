// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1557 lang=javascript
*
* [1557]  Minimum Number of Vertices to Reach All Nodes
*/
 
// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let map = new Array(n);
    let ans = [];
    
    for (let [index,value] of edges) {
        map[value] = 1;
    };
    
    for (let i = 0; i < n; i++) {
        if (!map[i]) ans.push(i);
    };
    
    return ans;
};
 
// @lc code=end