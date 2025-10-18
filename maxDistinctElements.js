/*
3397. Maximum Number of Distinct Elements After Operations

You are given an integer array nums and an integer k.

You are allowed to perform the following operation on each element of the array at most once:

Add an integer in the range [-k, k] to the element.
Return the maximum possible number of distinct elements in nums after performing the operations.

Example 1:

Input: nums = [1,2,2,3,3,4], k = 2

Output: 6

Explanation:

nums changes to [-1, 0, 1, 2, 3, 4] after performing operations on the first four elements.

Example 2:

Input: nums = [4,4,4,4], k = 1

Output: 3

Explanation:

By adding -1 to nums[0] and 1 to nums[1], nums changes to [3, 5, 4, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    let count = 0;
    let prev = -2147483648 >> 1;
    for (let a of nums) {
        let low = a - k;
        let high = a + k;
        let x = prev + 1;
        if (x < low) x = low;
        if (x <= high) {
            count++;
            prev = x;
        }
    }
    return count;
};

// Example usage:
console.log(maxDistinctElements([1,2,2,3,3,4], 2)); // Output: 6
console.log(maxDistinctElements([4,4,4,4], 1)); // Output: 3        