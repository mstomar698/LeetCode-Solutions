/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  //initialize the output array
  var output = [];

  // Simple for loop that analyzes the first 2 items of the nums array, followed by a while loop that defines the first one of those items as the number of times the second one is pushed to the output array.
  // For each time we push the second item to the output array we decrease the value of the first by one.
  // When the first item reaches the value 0 the while loop ends and the index of the for loop is increased by two, sending the next 2 items to be evaluated to the while loop.

  for (let i = 0; i < nums.length; i += 2) {
    while (nums[i] > 0) {
      output.push(nums[i + 1]);
      nums[i]--;
    }
  }

  return output;
};
