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
     * @return {number[]}
     */
    rightSideView(root) {
        const levels = {};
        const res = [];
        this.getLevels(root, 1, levels);
        for (const key in levels) {
            res.push(levels[key][0])
        }
        return res;
    }

    getLevels(node, currLevel, levels) {

        if (node === null) return;
        if (!levels[currLevel]) levels[currLevel] = [];

        levels[currLevel].push(node.val);

        this.getLevels(node.right, currLevel + 1, levels);
        this.getLevels(node.left, currLevel + 1, levels);
    }
}
