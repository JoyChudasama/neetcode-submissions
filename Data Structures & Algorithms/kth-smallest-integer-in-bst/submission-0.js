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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const treeValues = this.inOrderTraversal(root, []);
        return treeValues[k - 1];
    }

    // O(n) time | O(n) space 
    inOrderTraversal(node, array) {
        if (node === null) return;
        this.inOrderTraversal(node.left, array);
        array.push(node.val);
        this.inOrderTraversal(node.right, array);

        return array
    }
}
