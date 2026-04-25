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
     * @return {number[][]}
     */
    levelOrder(root) {
        const levels = [];

        const dfs = (node, level, currLevel) => {
            if (node === null) return;
            if (level !== currLevel) levels.push([]);
            levels[level - 1].push(node.val);
            dfs(node.left, level + 1, level);
            dfs(node.right, level + 1, level);
        }

        dfs(root, 1);

        return levels.filter(e => e.length)
    }
}
