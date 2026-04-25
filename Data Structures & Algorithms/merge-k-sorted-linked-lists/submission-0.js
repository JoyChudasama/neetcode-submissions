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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const allNums = [];

        for (const list of lists) {
            this.getAllNums(list, allNums);
        }
        console.log(allNums)
        allNums.sort((a, b) => a - b);

        return this.createLinkedListFromArray(allNums);
    }

    getAllNums(curr, allNums) {
        if (curr === null) return;
        allNums.push(curr.val);
        this.getAllNums(curr.next, allNums);
    }

    createLinkedListFromArray(arr) {
        const dummy = new ListNode();
        let curr = dummy;
        for (const num of arr) {
            const newNode = new ListNode(num);
            curr.next = newNode;
            curr = curr.next;
        }

        return dummy.next;
    }
}
