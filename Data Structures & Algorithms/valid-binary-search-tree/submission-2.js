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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }

    // if(node === null) return true;

    // if (node.value < min || node.value >= max) return false;

    // const isLeftValid = validateBst(node.left, min, node.value);
    // const isRightValid = validateBst(node.right, node.value, max);

    // return isLeftValid && isRightValid;

    isValid(node, min, max) {
        if (node === null) return true;

        // if (node.left && node.left.val >= node.val) return false;
        // if (node.right && node.right.val < node.val) return false;


        if (!(min < node.val && node.val < max)) return false;

        return this.isValid(node.left, min, node.val) && this.isValid(node.right, node.val, max);
    }
}
