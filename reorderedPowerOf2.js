/*
You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.

 

Example 1:

Input: n = 1
Output: true
Example 2:

Input: n = 10
Output: false
**/

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const countDigits = x => [...String(x)].sort().join('');
    const target = countDigits(n);
    
    for (let i = 0; i < 31; i++)
        if (countDigits(1 << i) === target) return true;

    return false;
};

// Example usage
console.log(reorderedPowerOf2(1)); // Output: true
console.log(reorderedPowerOf2(10)); // Output: false
console.log(reorderedPowerOf2(16)); // Output: true