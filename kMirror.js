/*

2081. Sum of k-Mirror Numbers

A k-mirror number is a positive integer without leading zeros that reads the same both forward and backward in base-10 as well as in base-k.

For example, 9 is a 2-mirror number. The representation of 9 in base-10 and base-2 are 9 and 1001 respectively, which read the same both forward and backward.
On the contrary, 4 is not a 2-mirror number. The representation of 4 in base-2 is 100, which does not read the same both forward and backward.
Given the base k and the number n, return the sum of the n smallest k-mirror numbers.

 

Example 1:

Input: k = 2, n = 5
Output: 25
Explanation:
The 5 smallest 2-mirror numbers and their representations in base-2 are listed as follows:
  base-10    base-2
    1          1
    3          11
    5          101
    7          111
    9          1001
Their sum = 1 + 3 + 5 + 7 + 9 = 25. 
Example 2:

Input: k = 3, n = 7
Output: 499
Explanation:
The 7 smallest 3-mirror numbers are and their representations in base-3 are listed as follows:
  base-10    base-3
    1          1
    2          2
    4          11
    8          22
    121        11111
    151        12121
    212        21212
Their sum = 1 + 2 + 4 + 8 + 121 + 151 + 212 = 499.
Example 3:

Input: k = 7, n = 17
Output: 20379000
Explanation: The 17 smallest 7-mirror numbers are:
1, 2, 3, 4, 5, 6, 8, 121, 171, 242, 292, 16561, 65656, 2137312, 4602064, 6597956, 6958596
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(base, count) {
    let digits = ['0']; // Start from base-k "0"
    let total = 0;

    const nextSymmetric = (digits) => {
        const half = Math.floor(digits.length / 2);
        for (let i = half; i < digits.length; i++) {
            let digit = parseInt(digits[i]);
            if (digit + 1 < base) {
                let newDigit = (digit + 1).toString();
                digits[i] = digits[digits.length - 1 - i] = newDigit; // Mirror increment
                for (let j = half; j < i; j++) {
                    digits[j] = digits[digits.length - 1 - j] = '0'; // Reset inner digits
                }
                return digits;
            }
        }
        // Increase length: 999 → 1001
        return ['1', ...Array(digits.length - 1).fill('0'), '1'];
    };

    const isPalindrome = (s) => s === [...s].reverse().join(''); // Check base-10 palindrome

    const toDecimal = (digits) => {
        let val = 0;
        for (let d of digits) val = val * base + parseInt(d); // Convert base-k to base-10
        return val;
    };

    for (let found = 0; found < count;) {
        digits = nextSymmetric(digits);
        const val = toDecimal(digits);
        if (isPalindrome(val.toString())) {
            total += val;
            found++;
        }
    }

    return total;
};





//example
// Example usage:   
console.log(kMirror(2, 5)); // Output: 25
console.log(kMirror(3, 7)); // Output: 499
console.log(kMirror(7, 17)); // Output: 20379000