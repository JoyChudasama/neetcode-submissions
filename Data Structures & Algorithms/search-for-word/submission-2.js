class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {

        const visitedCells = Array.from({ length: board.length }, () => Array(board[0].length).fill(0));
        for (let i = 0; i < visitedCells.length; i++) {
            for (let j = 0; j < visitedCells[i].length; j++) {
                visitedCells[i][j] = 0;
            }
        }

        const totalRows = board.length;
        const totalCols = board[0].length;

        const backtrack = (row, col, i) => {

            if (i === word.length) return true;


            if (
                row < 0 || row >= totalRows ||
                col < 0 || col >= totalCols ||
                visitedCells[row][col] ||
                board[row][col] !== word[i]
            ) {
                return false;
            }

            visitedCells[row][col] = 1;
            const found = backtrack(row + 1, col, i + 1) || backtrack(row - 1, col, i + 1) || backtrack(row, col + 1, i + 1) || backtrack(row, col - 1, i + 1);
            visitedCells[row][col] = false;
            return found;
        }

        for (let i = 0; i < totalRows; i++) {
            for (let j = 0; j < totalCols; j++) {
                if (backtrack(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;

    }
}
