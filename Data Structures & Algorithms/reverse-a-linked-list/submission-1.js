/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(curr, prev = null) {
        if (curr === null) return prev;

        const next = curr.next;

        curr.next = prev;
        prev = curr;

        return this.reverseList(next, prev);
    }
}
