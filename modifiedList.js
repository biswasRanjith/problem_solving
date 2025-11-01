/*
3217. Delete Nodes From Linked List Present in Array
Solved
Medium
Topics
premium lock icon
Companies
Hint
You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 

Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]

Explanation:



Remove the nodes with values 1, 2, and 3.

Example 2:

Input: nums = [1], head = [1,2,1,2,1,2]

Output: [2,2,2]

Explanation:



Remove the nodes with value 1.

Example 3:

Input: nums = [5], head = [1,2,3,4]

Output: [1,2,3,4]

Explanation:


No node has value 5.
*/

//javascript

 //Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    if (!head || !head.next) return head;
    let dummyNode = new ListNode(0, head);
    let curr = dummyNode;
    let numsSet = new Set(nums);
    while (curr.next && curr.next.val) {
        if (numsSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return dummyNode.next;
};

//
console.log(modifiedList([1,2,3], [1,2,3,4,5]))