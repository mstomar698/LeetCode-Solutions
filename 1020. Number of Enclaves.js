// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1020 lang=javascript
*
* [1020] Number of Enclaves
*/
 
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = grid => {
    let ones = 0, ok = 0, q
    for ( let i = 0, m = grid.length-1; i <= m; i++ )
        for ( let j = 0, n = grid[0].length-1; j <= n; j++ ) {
            ones += grid[i][j] || grid[i][j] == null, q = [[i,j]]
            if ( grid[i][j] && ( i == 0 || i == m || j == 0 || j == n ) )
                while ( q.length ) {
                    let [ x, y ] = q.shift()
                    if ( grid[x]?.[y] )
                        ++ok, grid[x][y] = null,
                        q.push( [x-1,y], [x+1,y], [x,y-1], [x,y+1] )
                }
        }
    return ones - ok
}
 
// @lc code=end