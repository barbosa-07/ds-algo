// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = new Map()
    for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        // check in the cache
        if(cache.has(nums[i])){
            let val = cache.get(nums[i])
            return [val, i]
        }else {
            cache.set(difference, i)
        }
    }
};