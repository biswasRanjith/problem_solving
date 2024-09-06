// 3217. Delete Nodes From Linked List Present in Array

// You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 

// Example 1:

// Input: nums = [1,2,3], head = [1,2,3,4,5]

// Output: [4,5]

// Input: nums = [1], head = [1,2,1,2,1,2]

// Output: [2,2,2]

// Input: nums = [5], head = [1,2,3,4]

// Output: [1,2,3,4]




//   Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    var res = new ListNode();
    var resCur = res;
    var cur = head;
    var set = new Set(nums);

    while (cur) {
        if (!set.has(cur.val)) {
            resCur.next = new ListNode(cur.val);
            resCur = resCur.next;
        }
        cur = cur.next;
    }

    return res.next;

};