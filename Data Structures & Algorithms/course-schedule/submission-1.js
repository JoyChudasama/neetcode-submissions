class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(vertices, edges) {
      const adjList = new Map();
    for (let i = 0; i < vertices; i++) adjList.set(i, []);
    for (const [a, b] of edges) adjList.get(a).push(b);

    const indegrees = new Map();
    for (let i = 0; i < vertices; i++) indegrees.set(i, 0);
    for (const [_, neighbors] of adjList) {
        for (const neighbor of neighbors) {
            indegrees.set(neighbor, indegrees.get(neighbor) + 1);
        }
    }

    const q = [];
    for (const [job, deg] of indegrees) {
        if (deg === 0) q.push(job);
    }

    const res = [];
    while (q.length) {
        const cur = q.shift();
        res.push(cur);

        for (const neighbor of adjList.get(cur)) {
            indegrees.set(neighbor, indegrees.get(neighbor) - 1);
            if (indegrees.get(neighbor) === 0) q.push(neighbor);
        }
    }

    return res.length === vertices ;
    }
}
