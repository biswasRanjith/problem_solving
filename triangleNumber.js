/*
611. Valid Triangle Number

Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:

Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
Example 2:

Input: nums = [4,2,3,4]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b)=> a -b);
    let total = 0;

    for(let longest = nums.length-1; longest>= 2; longest--){
        let left = 0;
        let right = longest-1;
        while(left<right){
            if(nums[right]+nums[left]>nums[longest]){
                total += (right-left);
                right--;
            }else{
                left++
            }
        }
    }
    return total;
};

console.log(triangleNumber([2,2,3,4]))

console.log(triangleNumber([4,2,3,4]))