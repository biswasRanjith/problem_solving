/**
 * Find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.
 * @param {number[]} nums - The input array
 * @return {number} - Number of subsets with maximum bitwise OR
 */
function countMaxOrSubsets(nums) {
    // Find the maximum possible bitwise OR
    let maxOR = 0;
    for (let num of nums) {
        maxOR |= num;
    }
    
    // Count subsets that have the maximum bitwise OR
    let count = 0;
    const n = nums.length;
    
    // Generate all possible subsets using bit manipulation
    for (let i = 1; i < (1 << n); i++) {
        let subsetOR = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subsetOR |= nums[j];
            }
        }
        if (subsetOR === maxOR) {
            count++;
        }
    }
    
    return count;
}

// Test cases
console.log("Example 1:");
console.log("Input: [3,1]");
console.log("Output:", countMaxOrSubsets([3,1])); // Expected: 2

console.log("\nExample 2:");
console.log("Input: [2,2,2]");
console.log("Output:", countMaxOrSubsets([2,2,2])); // Expected: 7

console.log("\nExample 3:");
console.log("Input: [3,2,1,5]");
console.log("Output:", countMaxOrSubsets([3,2,1,5])); // Expected: 6

// Additional test cases
console.log("\nTest case 4:");
console.log("Input: [1]");
console.log("Output:", countMaxOrSubsets([1])); // Expected: 1

console.log("\nTest case 5:");
console.log("Input: [1,2,3]");
console.log("Output:", countMaxOrSubsets([1,2,3])); // Expected: 4 