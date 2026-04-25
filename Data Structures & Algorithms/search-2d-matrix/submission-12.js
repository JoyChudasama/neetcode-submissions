class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

         let rowTop = 0;
    let rowBottom = matrix.length - 1;

    while (rowTop <= rowBottom) {
        const currentrow = Math.floor((rowTop + rowBottom) / 2);
        const currentroWFirstValue = matrix[currentrow][0];
        const currentroWLastValue = matrix[currentrow][matrix[currentrow].length - 1];

        if (target > currentroWLastValue) {
            rowTop = currentrow + 1;
        } else if (target < currentroWFirstValue) {
            rowBottom = currentrow - 1;
        } else {
            break;
        }
    }

    if (!(rowTop <= rowBottom)) return false;

    const row = Math.floor((rowTop + rowBottom) / 2);
    let colLeft = 0;
    let colRight = matrix[row].length - 1;
    
    while (colLeft <= colRight) {
        const colMid = Math.floor((colLeft + colRight) / 2);
        const colMidValue = matrix[row][colMid];

        if (colMidValue === target) return true;

        if (colMidValue > target) {
            colRight = colMid - 1;
        } else if (colMidValue < target) {
            colLeft = colMid + 1;
        }
    }

    return false;
    }
}
