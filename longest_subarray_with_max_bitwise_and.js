/**
 * Find the length of the longest subarray with maximum possible bitwise AND.
 * 
 * Key Insight: The maximum possible bitwise AND of any subarray is the maximum value in the array.
 * This is because:
 * 1. Bitwise AND can never increase a value, only decrease it or keep it the same
 * 2. The maximum value in the array is the highest possible bitwise AND
 * 3. A single element subarray will have bitwise AND equal to that element
 * 
 * @param {number[]} nums - Array of integers
 * @returns {number} Length of the longest subarray with maximum bitwise AND
 */
function longestSubarray(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // Find the maximum possible bitwise AND
    const maxAnd = Math.max(...nums);
    
    // Find the longest subarray with bitwise AND equal to maxAnd
    let maxLength = 0;
    let currentLength = 0;
    
    for (const num of nums) {
        if (num === maxAnd) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }
    
    return maxLength;
}

/**
 * Alternative implementation using reduce for finding maximum
 * 
 * @param {number[]} nums - Array of integers
 * @returns {number} Length of the longest subarray with maximum bitwise AND
 */
function longestSubarrayAlternative(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // Find the maximum value using reduce
    const maxVal = nums.reduce((max, num) => Math.max(max, num), nums[0]);
    
    // Find the longest consecutive sequence of maxVal
    let maxLength = 0;
    let currentLength = 0;
    
    for (const num of nums) {
        if (num === maxVal) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }
    
    return maxLength;
}

/**
 * Test the solution with various test cases
 */
function testSolution() {
    console.log("Testing Longest Subarray with Maximum Bitwise AND");
    console.log("=".repeat(50));
    
    const testCases = [
        {
            nums: [1, 2, 3, 3, 2, 2],
            expected: 2,
            description: "Test 1: nums = [1, 2, 3, 3, 2, 2]"
        },
        {
            nums: [1, 2, 3, 4],
            expected: 1,
            description: "Test 2: nums = [1, 2, 3, 4]"
        },
        {
            nums: [5, 5, 5, 5],
            expected: 4,
            description: "Test 3: nums = [5, 5, 5, 5]"
        },
        {
            nums: [1, 1, 1, 2, 2, 2, 1, 1],
            expected: 3,
            description: "Test 4: nums = [1, 1, 1, 2, 2, 2, 1, 1]"
        },
        {
            nums: [7],
            expected: 1,
            description: "Test 5: nums = [7]"
        },
        {
            nums: [0, 0, 0, 0],
            expected: 4,
            description: "Test 6: nums = [0, 0, 0, 0]"
        },
        {
            nums: [10, 5, 10, 5, 10],
            expected: 1,
            description: "Test 7: nums = [10, 5, 10, 5, 10]"
        },
        {
            nums: [8, 8, 8, 8, 8],
            expected: 5,
            description: "Test 8: nums = [8, 8, 8, 8, 8]"
        }
    ];
    
    testCases.forEach((testCase, index) => {
        const result = longestSubarray(testCase.nums);
        const passed = result === testCase.expected;
        
        console.log(testCase.description);
        console.log(`Expected: ${testCase.expected}, Got: ${result}`);
        console.log(`Pass: ${passed}`);
        console.log();
    });
}

/**
 * Explain the solution approach and why it works
 */
function explainSolution() {
    console.log("\n" + "=".repeat(60));
    console.log("SOLUTION EXPLANATION");
    console.log("=".repeat(60));
    
    console.log(`
Key Insight: The maximum possible bitwise AND of any subarray is the maximum value in the array.

Why this works:
1. Bitwise AND operation can never increase a value, only decrease it or keep it the same
2. When we perform bitwise AND on multiple numbers, the result will be less than or equal to the minimum of those numbers
3. Therefore, the maximum possible bitwise AND is achieved when we have a subarray containing only the maximum value in the array
4. A single element subarray will have bitwise AND equal to that element itself

Algorithm:
1. Find the maximum value in the array (this is the maximum possible bitwise AND)
2. Find the longest consecutive sequence of this maximum value
3. Return the length of this longest sequence

Time Complexity: O(n) where n is the length of the array
Space Complexity: O(1) as we only use a constant amount of extra space

Example Walkthrough:
nums = [1, 2, 3, 3, 2, 2]
- Maximum value = 3 (maximum possible bitwise AND)
- Longest consecutive sequence of 3: [3, 3] with length 2
- Answer: 2
    `);
}

// Run tests if this file is executed directly
if (typeof require !== 'undefined' && require.main === module) {
    testSolution();
    explainSolution();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { longestSubarray, longestSubarrayAlternative };
} 