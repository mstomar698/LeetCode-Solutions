// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2636 lang=javascript
*
* [2636]  Promise Pool
*/
 
// @lc code=start
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
    return new Promise((res) => {
      if(!functions.length) return res()
  
      let pool = 0
      let done = 0
      let index = 0
  
      const onDone = () => {
        done++
        pool--
  
        if (done === functions.length) return res()
        else run()
      }
  
      const run = () => {
        while (pool < n && index < functions.length) {
          pool++
          const func = functions[index++]
          func().then(onDone)
        }
      }
  
      run()    
    })
  };
 
// @lc code=end