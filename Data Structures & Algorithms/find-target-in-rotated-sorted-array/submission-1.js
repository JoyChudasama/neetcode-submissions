class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(array, target) {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const midNum = array[mid];
            const leftNum = array[left];
            const rightNum = array[right];

            if (midNum === target) {
                return mid;
            } else if (leftNum <= midNum) {
                if (target < midNum && target >= leftNum) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target > midNum && target <= rightNum) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
