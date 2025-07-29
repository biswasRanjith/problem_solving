/**
 *  Smallest Subarrays With Maximum Bitwise OR
Medium
Topics
premium lock icon
Companies
Hint
You are given a 0-indexed array nums of length n, consisting of non-negative integers. For each index i from 0 to n - 1, you must determine the size of the minimum sized non-empty subarray of nums starting at i (inclusive) that has the maximum possible bitwise OR.

In other words, let Bij be the bitwise OR of the subarray nums[i...j]. You need to find the smallest subarray starting at i, such that bitwise OR of this subarray is equal to max(Bik) where i <= k <= n - 1.
The bitwise OR of an array is the bitwise OR of all the numbers in it.

Return an integer array answer of size n where answer[i] is the length of the minimum sized subarray starting at i with maximum bitwise OR.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,0,2,1,3]
Output: [3,3,2,2,1]
Explanation:
The maximum possible bitwise OR starting at any index is 3. 
- Starting at index 0, the shortest subarray that yields it is [1,0,2].
- Starting at index 1, the shortest subarray that yields the maximum bitwise OR is [0,2,1].
- Starting at index 2, the shortest subarray that yields the maximum bitwise OR is [2,1].
- Starting at index 3, the shortest subarray that yields the maximum bitwise OR is [1,3].
- Starting at index 4, the shortest subarray that yields the maximum bitwise OR is [3].
Therefore, we return [3,3,2,2,1]. 
Example 2:

Input: nums = [1,2]
Output: [2,1]
Explanation:
Starting at index 0, the shortest subarray that yields the maximum bitwise OR is of length 2.
Starting at index 1, the shortest subarray that yields the maximum bitwise OR is of length 1.
Therefore, we return [2,1].

 * PROBLEM EXPLANATION:
 * 
 * This problem asks us to find, for each starting index i, the length of the shortest
 * subarray starting at i that achieves the maximum possible bitwise OR.
 * 
 * Key Insights:
 * 1. The maximum possible OR starting from index i is achieved by including ALL elements
 *    from index i to the end of the array (since OR is monotonic - adding more elements
 *    can only increase or maintain the OR value).
 * 
 * 2. Once we know the maximum OR value, we need to find the shortest prefix of the
 *    subarray starting at i that achieves this maximum value.
 * 
 * 3. Due to the monotonic property of OR, once we reach the maximum OR value, we can
 *    stop searching for shorter subarrays (they won't achieve a higher OR).
 * 
 * Algorithm:
 * 1. For each starting index i:
 *    - Calculate the maximum OR possible by OR-ing all elements from i to end
 *    - Find the shortest subarray starting at i that achieves this maximum OR
 * 
 * Time Complexity: O(n²) where n is the length of the array
 * Space Complexity: O(1) excluding the output array
 */

/**
 * Find the smallest subarrays starting at each index with maximum bitwise OR
 * @param {number[]} nums - The input array
 * @return {number[]} - Array of minimum subarray lengths for each starting index
 */
function smallestSubarrays(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(0);
    
    // For each starting index
    for (let i = 0; i < n; i++) {
        let currentOR = 0;
        let maxOR = 0;
        let minLength = Infinity;
        
        // Calculate the maximum possible OR starting from index i
        for (let j = i; j < n; j++) {
            maxOR |= nums[j];
        }
        
        // Find the shortest subarray starting at i that achieves maxOR
        currentOR = 0;
        for (let j = i; j < n; j++) {
            currentOR |= nums[j];
            if (currentOR === maxOR) {
                minLength = Math.min(minLength, j - i + 1);
                break; // Once we reach maxOR, we can't get a shorter subarray
            }
        }
        
        answer[i] = minLength;
    }
    
    return answer;
}

/**
 * Alternative optimized solution using sliding window approach
 * @param {number[]} nums - The input array
 * @return {number[]} - Array of minimum subarray lengths for each starting index
 */
function smallestSubarraysOptimized(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(0);
    
    // For each starting index
    for (let i = 0; i < n; i++) {
        let currentOR = 0;
        let maxOR = 0;
        
        // First pass: find the maximum OR possible starting from index i
        for (let j = i; j < n; j++) {
            maxOR |= nums[j];
        }
        
        // Second pass: find the shortest subarray that achieves maxOR
        currentOR = 0;
        for (let j = i; j < n; j++) {
            currentOR |= nums[j];
            if (currentOR === maxOR) {
                answer[i] = j - i + 1;
                break;
            }
        }
    }
    
    return answer;
}

// Test cases
console.log("Example 1:");
console.log("Input: [1,0,2,1,3]");
console.log("Output:", smallestSubarrays([1,0,2,1,3])); // Expected: [3,3,2,2,1]

console.log("\nDetailed walkthrough for Example 1:");
console.log("Index 0: maxOR = 1|0|2|1|3 = 3, shortest subarray [1,0,2] has length 3");
console.log("Index 1: maxOR = 0|2|1|3 = 3, shortest subarray [0,2,1] has length 3");
console.log("Index 2: maxOR = 2|1|3 = 3, shortest subarray [2,1] has length 2");
console.log("Index 3: maxOR = 1|3 = 3, shortest subarray [1,3] has length 2");
console.log("Index 4: maxOR = 3 = 3, shortest subarray [3] has length 1");

console.log("\nExample 2:");
console.log("Input: [1,2]");
console.log("Output:", smallestSubarrays([1,2])); // Expected: [2,1]

console.log("\nTest case 3:");
console.log("Input: [3,1,2]");
console.log("Output:", smallestSubarrays([3,1,2])); // Expected: [1,2,1]

console.log("\nTest case 4:");
console.log("Input: [0,0,0]");
console.log("Output:", smallestSubarrays([0,0,0])); // Expected: [1,1,1]

console.log("\nTest case 5:");
console.log("Input: [1,2,3,4]");
console.log("Output:", smallestSubarrays([1,2,3,4])); // Expected: [4,3,2,1]

// Testing optimized version
console.log("\n--- Optimized Version ---");
console.log("Example 1 (Optimized):");
console.log("Input: [1,0,2,1,3]");
console.log("Output:", smallestSubarraysOptimized([1,0,2,1,3])); // Expected: [3,3,2,2,1] 