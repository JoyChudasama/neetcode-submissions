class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
            const N = points.length;

    const dist = new Array(N).fill(Infinity); // Minimum cost to connect each node
    const visited = new Set();

    dist[0] = 0; // Start from node 0
    let totalMinCost = 0;

    for (let _ = 0; _ < N; _++) {
        // Find the unvisited node with the smallest connection cost
        let minCost = Infinity;
        let currNode = -1;

        for (let i = 0; i < N; i++) {
            if (!visited.has(i) && dist[i] < minCost) {
                minCost = dist[i];
                currNode = i;
            }
        }

        totalMinCost += minCost;
        visited.add(currNode);

        // Update distances to all unvisited neighbors
        for (let i = 0; i < N; i++) {
            if (!visited.has(i)) {
                const [x1, y1] = points[currNode];
                const [x2, y2] = points[i];
                const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                dist[i] = Math.min(dist[i], cost);
            }
        }
    }

    return totalMinCost;
    }
}
