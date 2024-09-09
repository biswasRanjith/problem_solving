// You are given two integers m and n, which represent the dimensions of a matrix.

// You are also given the head of a linked list of integers.

// Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

// Return the generated matrix.

 

// Example 1:


// Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
// Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
// Explanation: The diagram above shows how the values are printed in the matrix.
// Note that the remaining spaces in the matrix are filled with -1.
// Example 2:


// Input: m = 1, n = 4, head = [0,1,2]
// Output: [[0,1,2,-1]]
// Explanation: The diagram above shows how the values are printed from left to right in the matrix.
// The last space in the matrix is set to -1.
 

// Constraints:

// 1 <= m, n <= 105
// 1 <= m * n <= 105
// The number of nodes in the list is in the range [1, m * n].
// 0 <= Node.val <= 1000


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let mainArray = []
     for (let i = 0; i < m; i++) {
         mainArray[i] = new Array(n).fill(0)
     }
     
     let traverseHead = head
     let rowBegin = 0
     let rowEnd = m - 1
     let columnBegin = 0
     let columnEnd = n - 1
     while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
 
         for (let i = columnBegin; i <= columnEnd; i++) {
             mainArray[rowBegin][i] = traverseHead ? traverseHead.val : -1
             traverseHead = traverseHead ? traverseHead.next : traverseHead
         }
         rowBegin++
 
         for (let i = rowBegin; i <= rowEnd; i++) {
             mainArray[i][columnEnd] = traverseHead ? traverseHead.val : -1
             traverseHead = traverseHead ? traverseHead.next : traverseHead
         }
         columnEnd--
 
         if (rowBegin <= rowEnd) {
             for (let i = columnEnd; i >= columnBegin; i--) {
                 mainArray[rowEnd][i] = traverseHead ? traverseHead.val : -1
                 traverseHead = traverseHead ? traverseHead.next : traverseHead
             }
         }
         rowEnd--
 
         if (columnBegin <= columnEnd) {
             for (let i = rowEnd; i >= rowBegin; i--) {
                 mainArray[i][columnBegin] = traverseHead ? traverseHead.val : -1
                 traverseHead = traverseHead ? traverseHead.next : traverseHead
             }
         }
         columnBegin++
     }
     return mainArray  
 };
