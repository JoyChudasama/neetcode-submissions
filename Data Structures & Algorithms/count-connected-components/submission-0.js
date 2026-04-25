class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = new Map();
    for (let i = 0; i < n; i++) adjList.set(i, []);
    for (const [e1, e2] of edges) {
        adjList.get(e1).push(e2);
        adjList.get(e2).push(e1);
    }

    const visited = new Set();
    let connected = 0;
    const dfs = (curr, prev) => {
        if (visited.has(curr)) return false;

        visited.add(curr);
        for (const e of adjList.get(curr)) {
            if (e === prev) continue;
            if (dfs(e)) connected += 1
        }

        return true;
    }

    for (let i = 0; i < n; i++) {
        dfs(i, -1);
    }

    return n - connected;
    }
}
