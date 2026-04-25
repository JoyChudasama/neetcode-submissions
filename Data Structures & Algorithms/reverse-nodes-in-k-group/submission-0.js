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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head || k <= 1) return head;

        const dummy = new ListNode(0);
        dummy.next = head;
        let groupPrev = dummy;

        while (true) {
            let kth = this.getKthNode(groupPrev, k);
            if (!kth) break;

            let groupNext = kth.next;

            // Reverse group
            let prev = kth.next;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            // Reconnect the reversed group
            const tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }

    getKthNode(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
