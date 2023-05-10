// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=59 lang=javascript
*
* [59]  Spiral Matrix II
*/
 
// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
	let res = []

	for(let i = 0; i < n; i++) {
		res.push([])
	}

	let direction = 0
	let column = 0
	let row = 0
	let count = 1
	let flag = 0

	while (count !== n * n + 1) {
		switch (direction) {
			case 0:
				for (; column <= n - flag - 1; column++) {
					res[row][column] = count++
				}
				row++
				column--
				direction = 1
				break
			case 1:
				for (; row <= n - flag - 1; row++) {
					res[row][column] = count++
				}
				column--
				row--
				direction = 2
				break
			case 2:
				for (; column >= flag; column--) {
					res[row][column] = count++
				}
				row--
				column++
				direction = 3
				break
			case 3:
				for (; row >= 1 + flag; row--) {
					res[row][column] = count++
				}
				column++
				row++
				flag++
				direction = 0
				break
		}
	}

	return res
};
 
// @lc code=end