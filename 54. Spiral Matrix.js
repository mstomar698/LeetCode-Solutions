// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54]  Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // mark the top-left indices as starting point
  let start = {
    row: 0,
    col: 0,
  };
  // mark the bottom-right indices as ending point
  let end = {
    row: matrix.length - 1,
    col: matrix[0].length - 1,
  };
  // direction of travel: right, down, left, up
  let d = 'r'; // 'u' | 'd' | 'l' | 'r'
  const ans = [];
  // with each while loop, travel one circle and update start, end respectively
  while (start.row <= end.row && start.col <= end.col) {
    // push all items of current row, then update start.row
    if (d === 'r') {
      for (let i = start.col; i <= end.col; i++) {
        ans.push(matrix[start.row][i]);
      }
      start.row++;
      d = 'd';
    }
    // push all items of current col, then update end.col
    else if (d === 'd') {
      for (let i = start.row; i <= end.row; i++) {
        ans.push(matrix[i][end.col]);
      }
      end.col--;
      d = 'l';
    }
    // push all items of current row, then update end.row
    else if (d === 'l') {
      for (let i = end.col; i >= start.col; i--) {
        ans.push(matrix[end.row][i]);
      }
      end.row--;
      d = 'u';
    }
    // push all items of current col, then update start.col
    else if (d === 'u') {
      for (let i = end.row; i >= start.row; i--) {
        ans.push(matrix[i][start.col]);
      }
      start.col++;
      d = 'r';
    }
  }

  return ans;
};

// @lc code=end
