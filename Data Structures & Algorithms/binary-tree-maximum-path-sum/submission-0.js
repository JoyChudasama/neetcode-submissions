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
    maxPathSum(root) {
        const res = [root.val];
        this.dfs(root, res);
        return res[0];
    }

    dfs(node, res) {

        if (node === null) return 0;

        let maxLeft = this.dfs(node.left, res);
        let maxRight = this.dfs(node.right, res);
        maxLeft = Math.max(maxLeft, 0);
        maxRight = Math.max(maxRight, 0);

        res[0] = Math.max(res[0], node.val + maxLeft + maxRight);

        return node.val + Math.max(maxLeft, maxRight);
    }
}
