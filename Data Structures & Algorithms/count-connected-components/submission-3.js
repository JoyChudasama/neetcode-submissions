class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
            const parents = Array.from({ length: n }, (_, i) => i); // parent of i is parents[i]
    const size = Array(n).fill(0); // initially its 0 as nothing is connected

    function find(node) {
        // if node is not a parent of itself then find the parent node
        if (parents[node] !== node) {
            parents[node] = find(parents[node]); // path compression
        }
        return parents[node];
    }

    function union(x, y) {
        //get parent node of both nodes
        const rootX = find(x); 
        const rootY = find(y);

        if (rootX === rootY) return false; // already connected

        // connect the node of a smaller componentSize to a node with bigger componentSize and if both are same then update the size of that node as equal means they are already connected now 
        if (size[rootX] < size[rootY]) {
            parents[rootX] = rootY;
        } else if (size[rootX] > size[rootY]) {
            parents[rootY] = rootX;
        } else {
            parents[rootY] = rootX;
            size[rootX] += 1;
        }

        return true; // successfully merged two nodes
    }

    let count = n;
    for (const [u, v] of edges) {
        if (union(u, v)) {
            count--; // merged two separate nodes
        }
    }

    return count;
    }
}
