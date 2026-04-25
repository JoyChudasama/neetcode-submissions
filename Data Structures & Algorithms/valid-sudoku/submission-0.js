class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[r].length; c++){
                
                const currentNum = board[r][c];
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                console.log(squareKey)
                if(currentNum === '.') continue;

                if(
                    rows.get(r) && rows.get(r).has(currentNum) || 
                    cols.get(c) && cols.get(c).has(currentNum)|| 
                    squares.get(squareKey) && squares.get(squareKey).has(currentNum)
                ) return false;

                if(!rows.has(r)) rows.set(r, new Set());
                if(!cols.has(c)) cols.set(c, new Set());
                if(!squares.has(squareKey)) squares.set(squareKey, new Set());

                rows.get(r).add(currentNum);
                cols.get(c).add(currentNum);
                squares.get(squareKey).add(currentNum);
            }
        }

        return true;
    }
}
