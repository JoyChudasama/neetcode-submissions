/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} queue
     * @return {boolean}
     */
    isSameTree(p, q) {
        const queue = [[p, q]];
        let isSame = true;

        while (queue.length > 0) {
            const [a, b] = queue.shift();

            if (a === null && b === null) continue;

            if (a && b && a.val === b.val) {
                queue.push([a.left, b.left]);
                queue.push([a.right, b.right]);
                continue;
            }

            isSame = false;
            break;
        }

        return isSame;
    }
}
