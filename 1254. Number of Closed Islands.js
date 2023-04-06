// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1254 lang=javascript
*
* [1254]  Number of Closed Islands
*/
 
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    if (grid.length == 1) {
        return 0
    }
    let visited = {},
        islands = 0
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[0].length - 1; j++) {
            if (grid[i][j] === 0 && !visited[i + ',' + j] && isIsland(i, j)) {
                islands++
            }
        }
    }

    return islands;

    function isIsland(x, y) {
        if (x <= 0 || y <= 0 || x >= grid.length - 1 || y >= grid[0].length - 1) {
            return false
        }
        if (visited[x + ',' + y]) {
            return true
        }
        visited[x + ',' + y] = true
        const top = (grid[x - 1][y] === 1 || isIsland(x - 1, y))
        const right = (grid[x][y + 1] === 1 || isIsland(x, y + 1))
        const down = (grid[x + 1][y] === 1 || isIsland(x + 1, y))
        const left = (grid[x][y - 1] === 1 || isIsland(x, y - 1))
        return top && right && down && left
    }
};
 
// @lc code=end