/**
 * DELETE NOTE IN A LINKED LIST
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * REMOVE NTH NODE FROM END OF LIST
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var slow = head;
  var fast = head;

  // Move right pointer n steps ahead
  while (n > 0 && fast) {
    fast = fast.next;
    n--;
  }

  // If n is greater than length of the list, return null list
  if (!fast) return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

/**
 * REVERSE LINKED LIST
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
var reverseList = function (head) {
  // Base case [] or [1]
  if (!head || !head.next) return head;

  var prev = null;
  var current = head;
  var next = head.next;

  current.next = prev;

  while (next) {
    prev = current;
    current = next;
    next = current.next;
    current.next = prev;
  }
};

/**
 * MERGE TWO SORTED LISTS
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (!list1 && !list2) return list1;

  var dummy = new ListNode(0);
  var current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return dummy.next;
};

/**
 * PALINDROME LINKED LIST
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  var slow = head;
  var fast = head;

  // Move slow pointer to the middle of the list
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the second half of the list
  var prev = null;
  var current = slow;
  var next = slow.next;
  current.next = prev;
  while (next) {
    prev = current;
    current = next;
    next = current.next;
    current.next = prev;
  }

  // Compare the first half with the reversed second half
  while (current) {
    if (head.val !== current.val) return false;
    head = head.next;
    current = current.next;
  }
  return true;
};

/**
 * LINKED LIST CYCLE
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
