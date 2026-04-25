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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) return root;
        
        const q = [root];

        while (q.length > 0) {

            const curr = q.shift();
            const currLeft = curr.left;
            const currRight = curr.right;

            if (currLeft) q.push(currLeft);
            if (currRight) q.push(currRight);

            curr.left = currRight;
            curr.right = currLeft;
        }

        return root;
    }
}
