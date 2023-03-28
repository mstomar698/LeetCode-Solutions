// Replace X and Name_Here and fileName with Question Number and Question Statement
/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707]  Design Linked List
 */

// @lc code=start

var MyLinkedList = function () {
  this.arr = [];
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  return this.arr[index] === undefined ? -1 : this.arr[index];
};
/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.arr.unshift(val);
};
/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.arr.push(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.arr.length) return;
  this.arr.splice(index, 0, val);
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  this.arr.splice(index, 1);
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// @lc code=end
