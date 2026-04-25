class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {if (n === 0) return true;

    const adjList = new Map();
    for (let i = 0; i < n; i++) adjList.set(i, []);
    for (const [e1, e2] of edges) {
        adjList.get(e1).push(e2);
        adjList.get(e2).push(e1);
    }

    const visited = new Set();
    const dfs = (currNode, prevNode) => {
        if (visited.has(currNode)) return false;

        visited.add(currNode);

        for (const edge of adjList.get(currNode)) {
            if (edge === prevNode) continue;
            if (!dfs(edge, currNode)) return false;
        }

        return true;
    }

    return dfs(0, -1) && n === visited.size;}
}
