class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjMap = new Map();
        for (let i = 0; i < numCourses; i++) adjMap.set(i, []);
        for (const [course, prerequisite] of prerequisites) adjMap.get(course).push(prerequisite);

        const currVisiting = new Set();
        const seen = new Set();
        let courseOrder = [];
        const dfs = (course) => {
            if (currVisiting.has(course)) return false;
            if (seen.has(course)) return true;

            currVisiting.add(course);

            for (const prerequisite of adjMap.get(course)) {
                if (!dfs(prerequisite)) return false;
            }

            currVisiting.delete(course);
            seen.add(course)
            courseOrder.push(course);

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return courseOrder;
    }
}
