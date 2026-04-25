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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        const isSame = (a, b) => {
            if (!a && !b) return true;
            if (a && b && a.val === b.val) {
                return (isSame(a.left, b.left) && isSame(a.right, b.right));
            }

            return false;
        }

        if (subRoot === null) return true;
        if (root === null) return false;

        if (isSame(root, subRoot)) {
            return true
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}
