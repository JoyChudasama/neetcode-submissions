class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(array) {
        let left = 0;
        let right = array.length - 1;
        let result = array[left];

        while (left <= right) {
            if (array[left] < array[right]) {
                result = Math.min(array[left], result);
                break;
            }

            let mid = Math.floor((left + right) / 2);
            result = Math.min(result, array[mid]);

            if (array[mid] >= array[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result
    }
}
