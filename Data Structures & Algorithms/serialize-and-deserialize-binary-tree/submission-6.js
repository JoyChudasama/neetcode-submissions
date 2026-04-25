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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (root === null) return '';
        const arr = [];

        const dfs = (node) => {
            if (node === null) {
                arr.push('N');
                return;
            }

            arr.push(node.val.toString());
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return arr.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data === '') return null;
        const arr = data.split(',');
        const io = { val: 0 };

        const dfs = (i) => {
            if (arr[i] === 'N') {
                io.val += 1;
                return null;
            }

            const root = new TreeNode(parseInt(arr[i]));
            io.val += 1;
            root.left = dfs(io.val);
            root.right = dfs(io.val);
            return root;
        }

        return dfs(0);
    }
}
