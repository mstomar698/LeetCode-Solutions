// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24]  Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null) return head;
  
    let currHead = head;
    let nextHead = head.next;
    let skipHead = head.next.next;
  
    nextHead.next = currHead;
  
    currHead.next = swapPairs(skipHead);
  
    return nextHead;
  };
  

// @lc code=end
