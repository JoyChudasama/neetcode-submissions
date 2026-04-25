class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const atlantic = new Set();
        const pacific = new Set();
        const res = [];

        const dfs = (r, c, visited, prevHeight) => {
            if (visited.has(`${r},${c}`) || r < 0 || c < 0 || r >= rows || c >= cols || heights[r][c] < prevHeight) return;

            visited.add(`${r},${c}`);

            dfs(r + 1, c, visited, heights[r][c]);
            dfs(r - 1, c, visited, heights[r][c]);
            dfs(r, c + 1, visited, heights[r][c]);
            dfs(r, c - 1, visited, heights[r][c]);
        }

        for (let i = 0; i < cols; i++) {
            dfs(0, i, pacific, heights[0][i]);
            dfs(rows - 1, i, atlantic, heights[rows - 1][i]);
        }

        for (let i = 0; i < rows; i++) {
            dfs(i, 0, pacific, heights[i][0]);
            dfs(i, cols - 1, atlantic, heights[i][cols - 1]);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)) res.push([r, c]);
            }
        }

        return res;
    }
}
