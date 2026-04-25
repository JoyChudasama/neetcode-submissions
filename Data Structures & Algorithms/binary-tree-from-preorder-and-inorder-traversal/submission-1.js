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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let i = 0, j = 0;

        const dfs = (limit) => {
            if (i >= preorder.length) return null;

            if (inorder[j] === limit) {
                j += 1;
                return null;
            }

            const root = new TreeNode(preorder[i++]);
            root.left = dfs(root.val);
            root.right = dfs(limit);

            return root;
        }

        return dfs(Infinity);
    }
}
