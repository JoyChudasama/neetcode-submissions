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
     * @return {void}
     */
    reorderList(head) {
            let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = slow.next;
    slow.next = null; // splitting in half
    let prev = null
    // reverse second half
    while (secondHalf !== null) {
        const next = secondHalf.next;

        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = next;
    }

    let firstHalf = head;
    secondHalf = prev;
    // merge both half
    while (secondHalf !== null) {

        const firstHalfNext = firstHalf.next;
        const secondHalfNext = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = firstHalfNext;

        firstHalf = firstHalfNext;
        secondHalf = secondHalfNext;
    }
    }
}
