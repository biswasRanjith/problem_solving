/*

3442. Maximum Difference Between Even and Odd Frequency I

You are given a string s consisting of lowercase English letters.

Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

a1 has an odd frequency in the string.
a2 has an even frequency in the string.
Return this maximum difference.

 

Example 1:

Input: s = "aaaaabbc"

Output: 3

Explanation:

The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
The maximum difference is 5 - 2 = 3.
Example 2:

Input: s = "abcabcab"

Output: 1

Explanation:

The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
The maximum difference is 3 - 2 = 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const freq = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
      freq[s.charCodeAt(i) - aCode]++;
    }

    let odd = 0;
    let even = s.length;

    for (let n of freq) {
      if ((n & 1) === 1) {
        odd = Math.max(odd, n);
      } else if (n !== 0) {
        even = Math.min(even, n);
      }
    }

    return odd - even;
  
};


// Example usage:
console.log(maxDifference("aaaaabbc")); // Output: 3
console.log(maxDifference("abcabcab")); // Output: 1
console.log(maxDifference("aabbcc"));   // Output: 0
console.log(maxDifference("a"));        // Output: 1


/*
Intuition
The task involves finding the maximum difference between the frequency of a character with the highest odd frequency and the smallest non-zero even frequency in a string. The goal is to iterate through the characters in the string, count their frequencies, and analyze them based on parity. This is helpful in problems where character parity plays a role in operations like palindromes or string rearrangements.

Approach
Initialize a frequency array freq of size 26 to store the frequency of each lowercase alphabet character.

Traverse the string and increment the count in freq for each character.

Initialize two variables:

odd to track the maximum odd frequency.
even to track the minimum non-zero even frequency, initialized with the string length.
Iterate over the frequency array:

If the frequency is odd, update odd to the maximum of its current value and the frequency.
If the frequency is even and not zero, update even to the minimum of its current value and the frequency.
Return odd - even as the result.

Complexity
Time complexity:
O(n+26)=O(n)

Counting frequencies takes O(n) where n is the length of the string.
Processing 26 characters in the frequency array takes constant time.
Space complexity:
O(1)

The frequency array is fixed at 26 elements regardless of input size.
*/