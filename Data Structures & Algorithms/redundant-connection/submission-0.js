class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const parents = Array.from({ length: n }, (_, i) => i);
        const ranks = new Array(n).fill(0);

        const find = (node) => {
            if (parents[node] !== node) {
                parents[node] = find(parents[node]);
            }

            return parents[node];
        }

        const union = (v1, v2) => {
            const node1 = find(v1);
            const node2 = find(v2);

            if (node1 === node2) return false;

            if (ranks[node1] < ranks[node2]) {
                parents[node1] = node2;
            } else if (ranks[node1] > ranks[node2]) {
                parents[node2] = node1;
            } else {
                parents[node2] = node1;
                ranks[node1] += 1;
            }

            return true;
        }

        for (const [u, v] of edges) {
            if (!union(u, v)) return [u, v];
        }
    }
}
