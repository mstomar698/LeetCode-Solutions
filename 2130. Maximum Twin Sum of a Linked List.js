// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130]  Maximum Twin Sum of a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let twinSum = [];
  let values = [];
  let curr = head;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }
  for (let i = 0; i < values.length; i++) {
    twinSum.push(values[i] + values[values.length - i - 1]);
  }

  return Math.max(...twinSum);
};

// @lc code=end
