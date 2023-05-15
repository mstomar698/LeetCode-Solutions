// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2621 lang=javascript
*
* [2621]  Sleep
*/
 
// @lc code=start
/**
 * @param {number} millis
 */
async function sleep(millis) {
    let myPromise = new Promise(function (resolve) {
      setTimeout(() => resolve(), millis);
    });
    await myPromise;
  }
  /** 
   * let t = Date.now()
   * sleep(100).then(() => console.log(Date.now() - t)) // 100
   */
 
// @lc code=end