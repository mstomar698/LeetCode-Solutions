// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1639 lang=javascript
*
* [1639]  Number of Ways to Form a Target String Given a Dictionary
*/
 
// @lc code=start
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
let dpArr;
var numWays = function(words, target) {
    dpArr = Array(words[0].length).fill().map(() => Array(target.length).fill(-1));
    let freqArr = Array(26).fill().map(() => Array(words[0].length).fill(0));
    for(let i =0; i< words.length; i++){
        for(let j =0; j < words[i].length ;j++){
            let currCharIdx = words[i].charCodeAt(j) - 'a'.charCodeAt(0);
            freqArr[currCharIdx][j] += 1;
        }
    }

    return solve(words, target, freqArr, 0,0)
};

let solve = (words, target, freqArr, currTargetIdx, currWordIdx) => {
    if(currTargetIdx === target.length) return 1;
    if(currWordIdx === words[0].length) return 0;
    if(dpArr[currWordIdx][currTargetIdx] !== -1) return dpArr[currWordIdx][currTargetIdx]
    let ans = solve(words, target, freqArr, currTargetIdx, currWordIdx+1);
    let currCharIdx = target[currTargetIdx].charCodeAt(0) - 'a'.charCodeAt(0);
    if(freqArr[currCharIdx][currWordIdx] > 0){
        ans += solve(words, target, freqArr, currTargetIdx+1, currWordIdx+1) * freqArr[currCharIdx][currWordIdx];
    }
    return dpArr[currWordIdx][currTargetIdx] = ans % (10**9+7);
}
 
// @lc code=end