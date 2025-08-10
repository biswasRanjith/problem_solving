/*
You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

 

Example 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
Example 2:

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  let arr = new Set();
  let left = 0, curSum = 0, maxSum = 0;

  for(let right = 0; right< nums.length; right++){
    while(arr.has(nums[right])){
        curSum -= nums[left];
        arr.delete(nums[left]);
        left++;
    }
    arr.add(nums[right]);
    curSum += nums[right];
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};

// Example usage
console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // Output: 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // Output: 8
console.log(maximumUniqueSubarray([1, 2, 3, 4, 5])); // Output: 15
console.log(maximumUniqueSubarray([1, 1, 1, 1, 1])); // Output: 1