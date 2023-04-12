// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=71 lang=javascript
*
* [71]  Simplify Path
*/
 
// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let pathToProcess = path.split('/')
    for(let path of pathToProcess){
        if(path === '.' || path === ''){
            continue
        }
        if(path === '..'){
            stack.pop()
            continue
        }
        // console.log(path)
        stack.push(path)
        
    }
    return '/'+stack.join('/')
};
 
// @lc code=end