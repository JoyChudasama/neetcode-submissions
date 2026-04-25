class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
            const q = [];
    let fresh = 0;
    let mins = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) fresh += 1;
            if (grid[i][j] === 2) q.push([i, j]);
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (fresh > 0 && q.length > 0) {
        const length = q.length;
        for (let i = 0; i < length; i++) {
            const [currR, currC] = q.shift();

            for (const [dr, dc] of directions) {
                const row = currR + dr;
                const col = currC + dc;
                if (row >= 0 && row < grid.length &&
                    col >= 0 && col < grid[0].length &&
                    grid[row][col] === 1) {
                    grid[row][col] = 2;
                    q.push([row, col]);
                    fresh--;
                }
            }
        }
        mins++;
    }
    return fresh === 0 ? mins : -1;
    }
}
