/*
440. K-th Smallest in Lexicographical Order

Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].

 

Example 1:

Input: n = 13, k = 2
Output: 10
Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
Example 2:

Input: n = 1, k = 1
Output: 1
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let current = 1;
    k--;
    
    while (k > 0) {
        let count = countSteps(n, current, current + 1);
        if (count <= k) {
            current++;
            k -= count;
        } else {
            current *= 10;
            k--;
        }
    }
    
    return current;
};

function countSteps(n, curr, next) {
    let steps = 0;
    while (curr <= n) {
        steps += Math.min(n + 1, next) - curr;
        curr *= 10;
        next *= 10;
    }
    return steps;
};          



// Example usage:
console.log(findKthNumber(13, 2)); // Output: 10
console.log(findKthNumber(1, 1)); // Output: 1
console.log(findKthNumber(20, 5)); // Output: 12
console.log(findKthNumber(100, 10)); // Output: 19


/*

Intuition
To find the k-th smallest number in lexicographical order among the numbers from 1 to n, we can think of the problem as traversing a tree. Each number can be seen as a prefix that leads to its children (numbers that start with that prefix). We can effectively "navigate" this tree to find the k-th number without generating all numbers.

Approach
Prefix Tree Traversal: Start with the smallest prefix (1) and traverse the tree. For each prefix, count how many numbers exist under it within the limit n.

Count Steps: Use a helper function countSteps to count how many numbers fall within the range of the current prefix. If the count is less than or equal to k, move to the next prefix. Otherwise, go deeper into the current prefix (multiply it by 10).

Adjusting k: As you move down the tree or switch prefixes, adjust k accordingly. This helps in determining how many more steps are needed to reach the k-th number.

Return Result: Once k reaches zero, the current prefix is the k-th number in lexicographical order.

Complexity
Time complexity:
The time complexity is approximately O(log(n) * log(k)) due to the logarithmic depth of the tree traversal, as we effectively halve the problem size with each iteration.

Space complexity:
The space complexity is O(1) since we use a constant amount of space.

*/