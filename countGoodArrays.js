/*
3405. Count the Number of Arrays with K Matching Adjacent Elements

You are given three integers n, m, k. A good array arr of size n is defined as follows:

Each element in arr is in the inclusive range [1, m].
Exactly k indices i (where 1 <= i < n) satisfy the condition arr[i - 1] == arr[i].
Return the number of good arrays that can be formed.

Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 3, m = 2, k = 1

Output: 4

Explanation:

There are 4 good arrays. They are [1, 1, 2], [1, 2, 2], [2, 1, 1] and [2, 2, 1].
Hence, the answer is 4.
Example 2:

Input: n = 4, m = 2, k = 2

Output: 6

Explanation:

The good arrays are [1, 1, 1, 2], [1, 1, 2, 2], [1, 2, 2, 2], [2, 1, 1, 1], [2, 2, 1, 1] and [2, 2, 2, 1].
Hence, the answer is 6.
Example 3:

Input: n = 5, m = 2, k = 0

Output: 2

Explanation:

The good arrays are [1, 2, 1, 2, 1] and [2, 1, 2, 1, 2]. Hence, the answer is 2.
*/

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function(n, m, k) {
    prep();
    let ways = binom(n - 1, k);
    ways = (ways * BigInt(m)) % MOD;
    ways = (ways * pow(m - 1, n - k - 1)) % MOD;
    return Number(ways);
};

const MOD = BigInt(1e9 + 7);
const MAX = 100000;
const fac = Array(MAX).fill(0n);
const inv = Array(MAX).fill(0n);

const pow = (x, y) => {
    x = BigInt(x);
    y = BigInt(y);
    let res = 1n;
    while (y > 0n) {
        if (y & 1n) res = (res * x) % MOD;
        x = (x * x) % MOD;
        y >>= 1n;
    }
    return res;
};

const prep = () => {
    if (fac[0] !== 0n) return;
    fac[0] = 1n;
    for (let i = 1; i < MAX; i++) fac[i] = (fac[i - 1] * BigInt(i)) % MOD;
    inv[MAX - 1] = pow(fac[MAX - 1], MOD - 2n);
    for (let i = MAX - 2; i >= 0; i--) inv[i] = (inv[i + 1] * BigInt(i + 1)) % MOD;
};

const binom = (n, r) => {
    if (r < 0 || r > n) return 0n;
    return (((fac[n] * inv[r]) % MOD) * inv[n - r]) % MOD;
};



// Example usage:
console.log(countGoodArrays(3, 2, 1)); // Output: 4
console.log(countGoodArrays(4, 2, 2)); // Output: 6
console.log(countGoodArrays(5, 2, 0)); // Output: 2 

/*

Intuition
To count the number of good arrays, we need to place k adjacent equal pairs in an array of length n, where each value is from 1 to m. The remaining n - 1 - k positions must not be equal to the previous one.

This resembles a combinatorial problem:

Choose k positions (out of n - 1) to be "equal".

Set the first element: m options.

For the remaining n - 1 elements:

If position is equal to the previous, 1 choice.

Otherwise, choose from m - 1 options (excluding the previous one).

Approach
Choose positions for equality:
Choose k positions out of n - 1:
C(n-1, k)

Set first element:
m ways to set the first value.

Remaining elements:

k of them are same as previous → 1 way each.

n - 1 - k of them must differ → m - 1 choices each.

Final formula:
Total Ways=C(n−1,k)⋅m⋅(m−1)^n−1−k

Complexity
Time complexity:
Precomputation of factorials: O(n)

pow() uses binary exponentiation: O(log n)

Overall per query: O(n + log n)

Space complexity:
Factorials + inverse arrays: O(n)

*/