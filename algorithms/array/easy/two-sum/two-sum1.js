// Time Complexity: O(n^2)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // retrurn the indexes of the sum
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++) {
            const sum = nums[i] + nums[j]
            let result = checkSum(sum, target);
            if(result) {
                return [i, j]
            }
 
        }
    } 
 };
 
 var checkSum = function(sum, target) {
     return sum === target
 }