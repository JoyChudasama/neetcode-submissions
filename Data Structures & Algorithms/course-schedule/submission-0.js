class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
      const map = new Map();
    const visiting = new Set();

    for (let i = 0; i < numCourses; i++) map.set(i, []);

    for (const [course, prerequisite] of prerequisites) map.get(course).push(prerequisite);

    const dfs = (course) => {
        if (visiting.has(course)) return false;
        if (map.get(course).length === 0) return true;

        visiting.add(course);
        for (const prerequisite of map.get(course)) {
            if (!dfs(prerequisite)) return false;
        }
        visiting.delete(course);
        map.set(course, []);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
    }
}
