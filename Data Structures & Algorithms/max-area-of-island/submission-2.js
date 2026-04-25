class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const totalRows = grid.length;
        const totalCols = grid[0].length;
        let maxIslandSoFar = 0;

        const dfs = (r, c, curIslandLength) => {
            if (r >= totalRows || c >= totalCols || r < 0 || c < 0 || grid[r][c] === 0) return 0;

            grid[r][c] = 0;
            return (1 + dfs(r - 1, c, curIslandLength + 1) + dfs(r + 1, c, curIslandLength + 1) +
                dfs(r, c + 1, curIslandLength + 1) + dfs(r, c - 1, curIslandLength + 1)
            );
        }

        for (let i = 0; i < totalRows; i++) {
            for (let j = 0; j < totalCols; j++) {
                if (grid[i][j] === 1) {
                    const islandSize = dfs(i, j);
                    maxIslandSoFar = Math.max(maxIslandSoFar, islandSize);
                }
            }
        }

        return maxIslandSoFar;
    }
}
