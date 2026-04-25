class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets, start = 'JFK') {

        tickets.sort();

        const adjList = new Map();
        for (const [from, to] of tickets) {
            if (!adjList.has(from)) adjList.set(from, []);
            adjList.get(from).push(to);
        }

        const res = [start];
        const dfs = (node) => {
            if (res.length === tickets.length + 1) return true;

            const destinations = adjList.get(node);
            if (!destinations || destinations.length === 0) return false;

            for (let i = 0; i < destinations.length; i++) {
                const next = destinations[i];

                destinations.splice(i, 1);
                res.push(next);

                if (dfs(next)) return true;

                res.pop();
                destinations.splice(i, 0, next);
            }

            return false;
        };


        dfs(start);
        return res
    }
}
