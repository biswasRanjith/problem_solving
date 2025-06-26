/*

2311. Longest Binary Subsequence Less Than or Equal to K

You are given a binary string s and a positive integer k.

Return the length of the longest subsequence of s that makes up a binary number less than or equal to k.

Note:

The subsequence can contain leading zeroes.
The empty string is considered to be equal to 0.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
 

Example 1:

Input: s = "1001010", k = 5
Output: 5
Explanation: The longest subsequence of s that makes up a binary number less than or equal to 5 is "00010", as this number is equal to 2 in decimal.
Note that "00100" and "00101" are also possible, which are equal to 4 and 5 in decimal, respectively.
The length of this subsequence is 5, so 5 is returned.
Example 2:

Input: s = "00101001", k = 1
Output: 6
Explanation: "000001" is the longest subsequence of s that makes up a binary number less than or equal to 1, as this number is equal to 1 in decimal.
The length of this subsequence is 6, so 6 is returned.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let n = s.length;
    let zeros = 0, ones = 0;
    let value = 0n, pow = 1n;
    const bigK = BigInt(k);

    for (let c of s) {
        if (c === '0') zeros++;
    }

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '1') {
            if (value + pow > bigK) continue;
            value += pow;
            ones++;
        }
        pow <<= 1n;
        if (pow > bigK) break;
    }

    return zeros + ones;
};
// Example usage:
console.log(longestSubsequence("1001010", 5)); // Output: 5         
console.log(longestSubsequence("00101001", 1)); // Output: 6
console.log(longestSubsequence("1111", 15)); // Output: 4
console.log(longestSubsequence("0000", 0)); // Output: 4


/*
Approach: Greedy
Intuition
The task is to select the longest subsequence of s such that the binary value of this subsequence is less than or equal to k. The first instinct is to select as many 0s as possible, because compared to 1, a 0 contributes nothing to the binary value.

So, is it okay to include all the 0s? Yes, because choosing a 0 is always better than choosing a 1. Suppose we’ve already selected a subsequence and now want to add a 0 to it. While the 0 itself does not increase the binary value, it does double the contribution of any 1s already present by shifting them to higher positions. However, if needed, we can simply remove the highest-order 1 to maintain the binary value, keeping the total length the same. Therefore, adding a 0 is always beneficial or at least non-harmful compared to adding a 1.

After adding all the 0s, we then try to include as many 1s as possible. To do this, we start from the least significant bit and add 1s greedily, ensuring the binary value always remains ≤k. Since k restricts the maximum binary value, we can precompute the highest bit position that can be set to 1, avoiding the need to recalculate the contribution of that bit each time.

With these two strategies, we identify all positions that can be added to the subsequence and return the result.

// Approach: Greedy
var longestSubsequence = function (s, k) {
    let sm = 0;
    let cnt = 0;
    let bits = Math.log2(k) + 1;
    for (let i = 0; i < s.length; i++) {
        const ch = s[s.length - 1 - i];
        if (ch === "1") {
            if (i < bits && sm + (1 << i) <= k) {
                sm += 1 << i;
                cnt++;
            }
        } else {
            cnt++;
        }
    }
    return cnt;
};
*/