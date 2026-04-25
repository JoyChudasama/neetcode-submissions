/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const nodeMap = new Map(); // Use Map instead of {}
        nodeMap.set(node, new Node(node.val));

        const q = [node];

        while (q.length > 0) {
            const cur = q.shift();

            for (const neighbor of cur.neighbors) {
                if (!nodeMap.has(neighbor)) {
                    nodeMap.set(neighbor, new Node(neighbor.val));
                    q.push(neighbor);
                }
                nodeMap.get(cur).neighbors.push(nodeMap.get(neighbor));
            }
        }

        return nodeMap.get(node);
    }
}
