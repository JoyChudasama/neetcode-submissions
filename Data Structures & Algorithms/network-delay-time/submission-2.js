class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adjList = new Map();
        for (const [source, target, time] of times) {
            if (!adjList.has(source)) adjList.set(source, []);
            adjList.get(source).push([target, time]);
        };

        const distances = Array(n + 1).fill(Number.POSITIVE_INFINITY);
        const dfs = (cur, cost) => {
            if (cost >= distances[cur]) return;

            distances[cur] = cost;
            if (!adjList.get(cur)) return;
            for (const [node, time] of adjList.get(cur)) {
                dfs(node, cost + time);
            }
        }

        dfs(k, 0);
        const res = Math.max(...distances.slice(1));
        return res === Number.POSITIVE_INFINITY ? -1 : res;
    }
}
