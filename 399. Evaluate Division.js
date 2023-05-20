// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=399 lang=javascript
*
* [399]  Evaluate Division
*/
 
// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function bfs(graph, s, d, visited={}){
    if(visited[s]) return -1
    visited[s] = true;
    for(let key in graph[s]){
        if(key == d) return graph[s][key]; 
        let prod = bfs(graph, key, d, visited)
        if(prod != -1) return graph[s][key] * prod;
    }
    return -1;
}
var calcEquation = function(equations, values, queries) {
    let map = {};
    for(let i = 0; i< equations.length;i++){
        let u = equations[i][0]
        let v = equations[i][1]
        if(!map[u]) map[u] = { }
        map[u][v] = values[i];
        if(!map[v]) map[v] = {}  
        map[v][u] = 1/values[i];
    }
    let result = []
    for(let i = 0 ; i < queries.length; i++){
        if(!map[queries[i][0]]||!map[queries[i][1]]) result.push(-1)
        else result.push(bfs(map, queries[i][0], queries[i][1]))
    }
    return result;
};
 
// @lc code=end