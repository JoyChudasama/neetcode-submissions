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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        return this.helper(root, 0, Number.NEGATIVE_INFINITY);
    }

    helper(curr, currDepth) {
        if (curr === null) return currDepth;

        const leftMax = this.helper(curr.left, currDepth + 1)
        const rightMax = this.helper(curr.right, currDepth + 1)

        return Math.max(leftMax, rightMax);
    }
}
