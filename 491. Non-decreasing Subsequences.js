/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function(nums) {
	const result = new Set(); 
	
	function helper(i, list) {
		if (i === nums.length)
			return;
		
		if (list.length === 0 || nums[i] >= list[list.length - 1]) {
			list.push(nums[i]);
			
			if (list.length >= 2) 
				result.add(JSON.stringify(list));
			
			helper(i + 1, list);
			
			list.pop(); // backtrack
		}
		
		helper(i + 1, list);
	}

	helper(0, []);
	return Array.from(result).map(JSON.parse);;
};