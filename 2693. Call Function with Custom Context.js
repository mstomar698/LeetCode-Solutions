// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=2693 lang=javascript
*
* [2693]  Call Function with Custom Context
*/
 
// @lc code=start
/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const uniqueId = Symbol(); // Create a unique symbol key
    context[uniqueId] = this; // Assign the function to the context using the symbol key
    const result = context[uniqueId](...args); // Invoke the function with the provided arguments
    delete context[uniqueId]; // Remove the function from the context
    return result; // Return the result of the function invocation
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
 
// @lc code=end