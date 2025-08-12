/*
Given two positive integers n and x.

Return the number of ways n can be expressed as the sum of the xth power of unique positive integers, in other words, the number of sets of unique integers [n1, n2, ..., nk] where n = n1x + n2x + ... + nkx.

Since the result can be very large, return it modulo 109 + 7.

For example, if n = 160 and x = 3, one way to express n is n = 23 + 33 + 53.

 

Example 1:

Input: n = 10, x = 2
Output: 1
Explanation: We can express n as the following: n = 32 + 12 = 10.
It can be shown that it is the only way to express 10 as the sum of the 2nd power of unique integers.
Example 2:

Input: n = 4, x = 1
Output: 2
Explanation: We can express n in the following ways:
- n = 41 = 4.
- n = 31 + 11 = 4.
*/

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const ps = [];
  for (let i = 1; i ** x <= n; i++) {
    ps.push(i ** x);
  }
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (const p of ps) {
    for (let j = n; j >= p; j--) {
      dp[j] += dp[j - p];
      dp[j] %= 10 ** 9 + 7;
    }
  }
  return dp[n];
};
 // Example usage
console.log(numberOfWays(10, 2)); // Output: 1
console.log(numberOfWays(4, 1)); // Output: 2     