// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
* @lc app=leetcode id=1721 lang=javascript
*
* [1721]  Swapping Nodes in a Linked List
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
 * @param {number} k
 * @return {ListNode}
 */

var swapNodes = function(head, k) {
    let fast = head, second = head, first = head
    for(let i=0; i<k-1; i++)    fast = fast.next
    first = fast
    while(fast.next != null){
        fast = fast.next
        second = second.next
    }
    let temp = first.val
    first.val = second.val
    second.val = temp
    return head
};
 
// @lc code=end