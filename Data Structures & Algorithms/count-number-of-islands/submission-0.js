class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let islands = 0;

        const bfs = (r, c) => {
            const q = [];
            q.push([r, c]);
            grid[r][c] = '0';

            while (q.length > 0) {

                const [row, col] = q.shift();

                for (const [dr, dc] of directions) {
                    const nr = row + dr, nc = col + dc;
                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === '1') {
                        q.push([nr, nc]);
                        grid[nr][nc] = '0';
                    }
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === '1') {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
