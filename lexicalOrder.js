/*386. Lexicographical Numbers
Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

 

Example 1:

Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
Example 2:

Input: n = 2
Output: [1,2]
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var r =[];
    const dfs = (res, cur, max) => {
        if (cur > max) return;
        res.push(cur);
        for (let i = 0; i < 10; i++) {
            const nxt = cur * 10 + i;
            if (nxt > max) return;
            dfs(res, nxt, max);
        }
    };

    for (let i = 1; i < 10; i++)
        dfs(r, i, n);

    return r;
};



// Example usage:
console.log(lexicalOrder(13)); // Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(2));  // Output: [1,2]
console.log(lexicalOrder(20)); // Output: [1,10,11,12,13,14,15,16,17,18,19,2,20]

/*
Intuition
We want to list all numbers from 1 to n in lexicographical (dictionary) order. For example, if n = 13, the order would be:
["1", "10", "11", "12", "13", "2", "3", ..., "9"]

This resembles a preorder traversal of a tree where:

Each node represents a number,
Each number can have children by appending digits 0–9 (as long as it doesn't exceed n).


Approach
We use Depth-First Search (DFS):

Start from numbers 1 through 9 (since 0 isn't allowed as a starting digit).
For each number cur, recursively build its children by appending digits from 0 to 9 (cur * 10 + i).
Stop recursion if the number exceeds n.
This simulates building a lexical tree and traversing it in preorder.

*/